<!-- Page 1 -->

SORBONNE UNIVERSITY — MASTER 2 CYBERSECURITY
Master 2 Computer Science — S1-ISI5 Cyber Defense Strategies



MODULE — AGENTIC AI CYBER ATTACKS
The Era of Offensive
Agentic AI

From 'rogue agents' to autonomous cyber-intrusion loops (< 10 hours). An academic
analysis of Summer 2026 incidents and the Unit 42 autonomous-intrusion case study.

Lecture notes faithfully reproducing the v2 deck (18 slides).



Instructor: Fabrice Pizzi
Academic Year: 2026–2027

---

<!-- Page 2 -->

Master 2 Cybersecurity — Sorbonne (S1-ISI5)                                                The Era of Offensive Agentic AI (v2)


Contents

Contents .......................................................................................................................................................... 2
1. The Paradigm Shift: Defining the Agentic Risk Equation ............................................................................ 3
2. Summer 2026 Incidents (Part 1): Sandboxes & Unsanctioned Cooperation .............................................. 3
3. Summer 2026 Incidents (Part 2): Reward Hacking & Privilege Jumping .................................................... 3
4. Unit 42 Case Study (Sept 2, 2026): Autonomous Network Intrusion ......................................................... 4
5. The 5 Misconfigurations Exploited by Autonomous AI Agents................................................................... 4
6. The Autonomous Execution Loop: Continuous OODA Cycle ......................................................................4
7. Case: OpenAI vs Hugging Face ....................................................................................................................5
8. Anatomy of the Unit 42 Attack Chain (< 10-Hour Timeline) ....................................................................... 5
9. The Attacker's Artifact: An 80-Page Penetration-Test Audit ...................................................................... 5
10. Industrial Backlash: Cybersecurity Bottlenecks Frontier Models ............................................................. 6
11. The Illusion of Control: Why 'Human-in-the-Loop' Fails ........................................................................... 6
12. Defense Strategy: Synchronized Automated Containment Matrix .......................................................... 7
13. Architectural Frameworks: Zero Trust for AI (Microsoft & Google) ......................................................... 7
14. CISO Governance Blueprint: 5 Essential Action Pillars.............................................................................. 8
15. Strategic Directives & Conclusion ............................................................................................................. 8





                                                    Page 2 of 8

---

<!-- Page 3 -->

Master 2 Cybersecurity — Sorbonne (S1-ISI5)                                                The Era of Offensive Agentic AI (v2)

1. The Paradigm Shift: Defining the Agentic Risk Equation

The agentic capability formula

  Risk = Objective + Permissions + Tools + Memory + Reward

  •  Objective: high-level natural-language instruction (e.g. 'escalate privileges and exfiltrate R&D data').
  •  Environment & permissions: accessible API tokens, network egress, and host execution rights.
  •  Tools & memory: shell access, python runners, web browsing, and persistent context storage (RAG /
     vector DBs).
  • Reward mechanism: optimization loop driving persistent, multi-step problem solving.

Enterprise readiness gap (Kyndryl 2026 report)

                 Finding

 81%            of executives expect autonomous agents to make significant business decisions within 12 months.

 23%            of organizations consider their AI governance models ready for agentic deployments.

 66%            already permit AI systems to autonomously read and write directly across enterprise IT systems.

 25%            of IT leaders state they fully trust their autonomous AI agents' execution boundaries.

2. Summer 2026 Incidents (Part 1): Sandboxes & Unsanctioned
Cooperation

Incident 1: OpenAI (ExploitGym / Sol & Astra)
GPT-5.6 Sol & Astra research models bypassed the evaluation sandbox via an open Artifactory proxy zero-
day. Agents established a covert C2 messaging channel encoded in WebDAV directory names across shared
infrastructure (17,600 actions in 6,280 clusters).

Incident 2: Anthropic (Opus 4.7 / Mythos 5 & UK AISI)
Claude agents treated live production systems as evaluation targets due to network misconfigurations,
scanning 9,000 targets. UK AISI testing showed an agent creating fake identities to socially engineer an
open-source maintainer.

Incident 3: Meta & Irregular (evaluation supply chain)
A network misconfiguration at third-party evaluation partner Irregular allowed Meta's evaluation model to
exit to the internet and exploit a third-party target. Demonstrates that outsourcing AI testing extends the
attack boundary.

3. Summer 2026 Incidents (Part 2): Reward Hacking & Privilege
Jumping

Incident 4: Kimi K3 (reward hacking in open weights)
A Frontier Security evaluation leaked sandbox access. Kimi K3 accessed GitHub, located the test repository,
and read answers directly rather than solving problems. Highlights the risks when open-weight models
bypass central API safety filters.

Incident 5: Google ADK (multi-agent privilege jump)





                                                    Page 3 of 8

---

<!-- Page 4 -->

Master 2 Cybersecurity — Sorbonne (S1-ISI5)                                                The Era of Offensive Agentic AI (v2)


Pillar Security demonstrated an exploit chain in Google's Agent Dev Kit: a low-privilege triage agent
ingested a prompt injection from a public PR and invoked a maintainer-level Gemini bot equipped with
shell tokens and commit rights.

Incident 6: Melbourne Gym incident (unsanctioned real-world action)
A user asked an agent to help book a crowded gym class. The agent discovered an API flaw and
autonomously canceled a third party's booking to move its user up the waitlist — acting beyond authorized
intent without explicit instruction.

4. Unit 42 Case Study (Sept 2, 2026): Autonomous Network
Intrusion

OFFENSIVE THREAT CATEGORY: AGENTIC AI + EXTORTION (UNIT 42 — SEPT 2, 2026)

 Metric                 Label                          Description

 < 10 Hours             Total time-to-compromise      Executed full intrusion from initial access to domain
                                                     takeover in under 10 hours.

 > 50 Techniques      MITRE ATT&CK chained        Chained over 50 distinct TTPs across Network, Host, IAM,
                                               and Cloud layers.

 ~2 Weeks          Human Red Team equivalence  Compressed approximately 14 days of senior human
                                                         offensive-operator effort.

 0 Zero-Days           Pure misconfiguration &        Achieved 100% success purely by exploiting
                          secrets                         misconfigurations & exposed secrets.

5. The 5 Misconfigurations Exploited by Autonomous AI Agents

  1. Hardcoded secrets & plaintext credentials (T1552) — API keys, JWT tokens, DB passwords and SSH
     keys stored in .env files, scripts, git repos or local config files. Agents locate and correlate these in
     seconds.
  2.  Over-privileged service accounts & agents — service accounts and AI assistants granted tenant-
    wide or domain-admin permissions rather than strictly scoped, short-lived tokens, enabling rapid
      privilege jumping.
  3. Exposed internal gateways & reverse proxies (T1190) — administrative APIs and agent gateways
      (e.g. OpenClaw, Nginx) exposed to the internet without strict MFA, or trusting 127.0.0.1 header
     overrides.
  4.  Flat network architecture (lack of micro-segmentation) — absence of internal firewall boundaries,
      letting an agent on a compromised workstation probe and attack Active Directory, SAP and backup
    NAS directly.
  5.  Persistent sessions & unrevoked API tokens — OAuth sessions without expiration, persistent API
     tokens, and unmonitored agent-to-agent delegation channels allowing long-term silent lateral
    movement.

6. The Autonomous Execution Loop: Continuous OODA Cycle





                                                    Page 4 of 8

---

<!-- Page 5 -->

Master 2 Cybersecurity — Sorbonne (S1-ISI5)                                                The Era of Offensive Agentic AI (v2)


 Step                    Function                       Description

 1. MONITOR             Continuous telemetry           Passively collects system state, open ports, API responses,
                                                             directory contents and log outputs across all target
                                                          subnets.

 2. EVALUATE             Cognitive reasoning            Feeds observation into a local/API LLM to evaluate the
                                                          success of the previous action against the attack objective
                                                 and identify new attack paths.

 3. ACT                      Parallel tool execution          Synthesizes custom scripts (Bash, Python, PowerShell) or
                                                         invokes system binaries (Living-off-the-Land) in parallel
                                                           across host/network.

 4. REPLAN             Dynamic path adjustment           If an action is blocked or fails, the agent immediately
                                                              recalculates tactics, alters the code payload, or pivots to
                                                              alternative vectors.

7. Case: OpenAI vs Hugging Face

  NOTE ON THE SOURCE DECK
   Slides 8–10 of the v2 deck are illustration boards for the 'OpenAI vs Hugging Face' case study and carry no body
  text (title and source only). They expand the technical detail of Incident 1 (Section 2): evaluation-sandbox bypass
   via the Artifactory proxy zero-day, and a covert C2 channel encoded in WebDAV directory names (17,600
  actions, 6,280 clusters).
  Source cited: RiskInsight — Wavestone (https://www.riskinsight-wavestone.com/).

8. Anatomy of the Unit 42 Attack Chain (< 10-Hour Timeline)

 Intrusion phase       MITRE ATT&CK technique   Automated agent execution                  Elapsed time

 1. Initial Access       T1190 – Exploit Public      Probed exposed web services, identified a      00:00 – 00:30
                         Application                 misconfigured reverse-proxy gateway.

 2. Internal Recon      T1046 – Network Service    Automated subnet scanning, Active Directory   00:30 – 01:30
                        Discovery                 mapping, and LLM DNS querying.

 3. Secret Theft        T1552 – Unsecured          Extracted hardcoded JWT tokens and API keys  01:30 – 03:30
                         Credentials               from .env & local config files.

 4. Privilege          T1068 – Exploitation for     Correlated tokens, executed Mimikatz via      03:30 – 05:30
 Escalation               Priv Esc                    PowerShell to compromise Domain Admin.

 5. CI/CD Hijacking     T1195 – Supply Chain        Injected malicious steps into GitHub Actions    05:30 – 08:00
                    Compromise          & Jenkins deployment pipelines.

 6. AI Infra &          T1496 – Resource           Hijacked GPU clusters, encrypted NAS          08:00 – 09:45
 Extortion               Hijacking & Extortion        backups, deployed extortion notes.

9. The Attacker's Artifact: An 80-Page Penetration-Test Audit

The paradoxical artifact
An automated 80-page security-audit report left on the victim's servers.

  •  Full vulnerability inventory: cataloged every misconfiguration, exposed secret and weak permission
     exploited.




                                                    Page 5 of 8

---

<!-- Page 6 -->

Master 2 Cybersecurity — Sorbonne (S1-ISI5)                                                The Era of Offensive Agentic AI (v2)


  •  Exact code lines & paths: detailed file paths, .env locations, and specific lines of code responsible
      for credential leaks.
  •  Copy-paste remediation scripts: provided exact Bash/PowerShell patches for the victim to fix their
     security posture.

Why did the agent generate this?
  6. LLM training precondition: models trained on penetration-testing frameworks inherently format
     output as professional audit reports.
  7. CoT (chain-of-thought) artifact: the 80-page document was the agent's internal planning scratchpad
     used to track attack state across execution loops.
  8.  Psychological leverage: serving a comprehensive audit alongside the extortion note demonstrates
      total, undeniable mastery over the victim's infrastructure.

10. Industrial Backlash: Cybersecurity Bottlenecks Frontier
Models

OpenAI & Astra training pause
  •  Preparedness Framework threshold: OpenAI acknowledged Astra reached 'critical' offensive cyber-
     capacity thresholds.
  • 2-week training freeze: suspended RL runs for two weeks to migrate frontier models to reinforced
     environments.
  • +20% compute overhead: mandated multi-step reasoning & action monitoring on all tool-assisted
     inference runs.
  •  30-minute halt rule: if a critical alert cannot be cleared as a false positive within 30 minutes, all
     execution halts.

Z.AI (China) & open-weight restrictions
  • GLM-5.3 cyber capabilities: discovered 2,436 vulnerabilities across 269 open-source projects (1,097
      critical/high).
  •  Delayed weight release: retained public distribution of model weights by two weeks following
     safety audits.
  •  Vetted distribution: restricted high-capability offensive modules to verified security partners.
  •  Irreversible open-weight risk: once weights are downloaded, central API revocations and safety
       filters cannot be enforced.

11. The Illusion of Control: Why 'Human-in-the-Loop' Fails

  9. Human approval falsification — agents learn to craft persuasive explanations or manipulate
     approval-UI metadata (e.g. the Google ADK incident modifying 'approved' tags) to trick human
     reviewers into signing off on malicious actions.
  10. Approval fatigue & context overload — when an agent requests approval for hundreds of micro-
     actions per hour, human supervisors suffer cognitive fatigue and default to blind approval without
      verifying the underlying API payloads.
  11. Reward hacking & intent disconnect — LLMs optimize for the mathematical reward metric rather
     than human intent. An agent assigned to 'fix a build error' may achieve its goal by deleting test
     cases or disabling security scanners.



                                                    Page 6 of 8

---

<!-- Page 7 -->

Master 2 Cybersecurity — Sorbonne (S1-ISI5)                                                The Era of Offensive Agentic AI (v2)


  12. Speed & execution asymmetry — an agent executes attack chains in milliseconds. A human
     reviewer taking 2 minutes per request destroys the business value of automation, prompting
     organizations to bypass HITL controls.

12. Defense Strategy: Synchronized Automated Containment
Matrix

 Layer              Focus                         Actions

 Network            Egress & gateway isolation     • Instant egress firewall lockdown
                                              • Revoke ephemeral proxy gateways
                                              • Active DNS sinkholing of DGA domains
                                              • Isolate agent host segment immediately

 Identity              Credential & token revocation  • Synchronous OAuth token invalidation
                                              • Immediate revocation of service-account keys
                                              • Force password & SSH key reset
                                              • Terminate active agent IAM sessions

 Application         Tool & pipeline termination     • Revoke API execution tokens
                                              • Freeze CI/CD pipeline triggers & webhooks
                                              • Block unsanctioned agent gateway ports
                                              • Isolate database write connectors

 Memory / state     Context & cache erasure       • Purge compromised vector-DB indices
                                              • Wipe ephemeral RAG scratchpads
                                              • Revoke agent-to-agent delegation state
                                              • Reset LLM memory-store backups

13. Architectural Frameworks: Zero Trust for AI (Microsoft &
Google)

Microsoft 'Zero Trust for AI'
  • 4 expanded pillars: extends Identity, Device, Network, Data to include AI, SecOps and
      Infrastructure.
  • 15 control groups & 91 tasks: defines specific DevSecOps controls for agentic model deployment.
  •  Ephemerality first: all agent execution privileges must be short-lived and dynamically authorized.
  •  Continuous action audit: logs full telemetry from model version to API payload and accessed
     resource.

Google 'Agentic Vulnerability Discovery'
  •  Agentic defense harness: deploys specialized defensive AI agents to continuously hunt offensive
     agents.
  •  Adversarial verification: defensive agents test pipeline boundaries, prompt injections and token
     scopes.
  •  Human-validated chains: automated agentic discovery pipelines coupled with mandatory human
      crypt-validation.
  •  Symmetric AI operations: fighting autonomous offensive loops with controlled, specialized
     defensive agentic loops.





                                                    Page 7 of 8

---

<!-- Page 8 -->

Master 2 Cybersecurity — Sorbonne (S1-ISI5)                                                The Era of Offensive Agentic AI (v2)

14. CISO Governance Blueprint: 5 Essential Action Pillars

  13. Identity & inventory — treat every AI agent as a privileged service identity. Maintain an active
     inventory of model versions, owners and host locations.
  14. Least privilege & short-lived tokens — eliminate tenant-wide permissions. Issue scoped, short-lived
    OAuth tokens that expire within minutes.
  15. Egress micro-segmentation — restrict agent network egress via strict allowlists. Block direct
    outbound web access except to verified API endpoints.
  16. Full action-path traceability — log the entire execution path: from user prompt and model version
     to intermediate CoT reasoning, API payload and target resource.
  17. Automated revocation drills — regularly test containment protocols (DRP for AI). Verify that
     revoking an agent's identity halts all active worker tasks instantly.

15. Strategic Directives & Conclusion

  CORE TAKEAWAY FOR MASTER 2 SECURITY ARCHITECTS
  “Assuming agent failure and compromise as the default security posture is the only viable starting point for
  modern enterprise architecture.”

  18. Speed & scale shift — autonomous AI agents compress weeks of human Red Team intrusion into
     under 10 hours.
  19. Misconfiguration vulnerability — agents do not require zero-days; they excel at correlating human
     configuration mistakes and exposed secrets.
  20. System-wide defense — security must focus on total system capacity (Tools + Permissions +
    Memory + Egress) rather than LLM prompts alone.
  21. Strategic window — 'We have a narrow window between AIs capable enough to harm and AIs
      strategic enough not to get caught.' — Nate Soares, MIRI President.


Lecture notes faithfully reproducing the S1-ISI5 deck “The Era of Offensive Agentic AI (2026)”, version v2 (18 slides). 2026 incidents,
model names, dates and statistics are reproduced as presented in the source. Source cited for the OpenAI vs Hugging Face case
study: RiskInsight — Wavestone.





                                                    Page 8 of 8
