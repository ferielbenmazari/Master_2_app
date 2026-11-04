"""Prototype du vérificateur de citations (référence pour l'implémentation TS de T02)."""
import json, re, sys, unicodedata, difflib, os
def norm(t):
    t = unicodedata.normalize("NFKD", t)
    t = "".join(c for c in t if not unicodedata.combining(c))
    t = t.lower().replace("œ","oe").replace("æ","ae")
    t = re.sub(r"[^a-z0-9]+", " ", t)
    return re.sub(r"\s+", " ", t).strip()
def check(text, quote, threshold=0.9):
    n, q = norm(text), norm(quote)
    if not q: return 0.0
    if q in n: return 1.0
    tw, qw = n.split(), q.split()
    best = 0.0
    L = len(qw)
    for i in range(0, max(1, len(tw) - L + 1)):
        win = tw[i:i + L + 3]
        r = difflib.SequenceMatcher(None, qw, win).find_longest_match  # cheap prefilter
        m = sum(b.size for b in difflib.SequenceMatcher(None, qw, win, autojunk=False).get_matching_blocks())
        best = max(best, m / L)
        if best >= 1: break
    return best
if __name__ == "__main__":
    root = sys.argv[1]; files = sys.argv[2:]
    bad = 0; total = 0
    def walk(o, path):
        global bad, total
        if isinstance(o, dict):
            if set(o) >= {"file", "loc", "quote"}:
                total += 1
                f = os.path.join(root, o["file"])
                if not os.path.exists(f):
                    print("✖ fichier absent", path, o["file"]); bad += 1; return
                r = check(open(f, encoding="utf-8").read(), o["quote"])
                if r < 0.9: print(f"✖ {path} ratio={r:.2f} :: {o['quote'][:70]}"); bad += 1
                wc = len(o["quote"].split())
                if wc < 4 or wc > 40: print(f"⚠ {path} longueur citation {wc} mots")
                return
            for k, v in o.items(): walk(v, f"{path}.{k}")
        elif isinstance(o, list):
            for i, v in enumerate(o): walk(v, f"{path}[{i}]")
    for fp in files: walk(json.load(open(fp)), os.path.basename(fp))
    print(f"{'✔' if not bad else '✖'} {total - bad}/{total} citations vérifiées")
    sys.exit(1 if bad else 0)
