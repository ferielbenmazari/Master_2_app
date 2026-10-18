

## UNIVERSITÉ PARIS 1 PANTHÉON-SORBONNE
Master 2 — Cybersecurity  ·  Semester 1  ·  Course S1-ISI5

## LECTURE 1
## Information Systems Security:
Anatomy of an Evolving Battlefield
From foundational architectures to the industrialization of cybercrime and AI-driven
risks in 2026.

## Instructor:  Fabrice Pizzi
## Academic Year:  2026–2027
Format:  Academic lecture notes (self-contained reading)


Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 2 of 14
## Contents
Contents .......................................................................................................................................................... 2
Course Overview ............................................................................................................................................. 3
Learning outcomes ..................................................................................................................................... 3
- The Postulate: The Information System as the Core of Value .................................................................... 4
- Defining the Territory: The Six Components of the IS ................................................................................ 4
- Protecting the Crown Jewels: The Evaluation Criteria ................................................................................ 5
- Mapping the Adversary: The Threat Evolution Matrix ............................................................................... 6
- The Industrialization of Extortion: Ransomware-as-a-Service .................................................................... 6
- Permeable Perimeters: The Supply-Chain Vector ....................................................................................... 7
- The Insider Threat: Access Over Intent ....................................................................................................... 8
- Information Warfare: E-Reputation and Destabilization ............................................................................ 8
- The 2026 Catalyst: Artificial Intelligence as a Risk Multiplier ..................................................................... 9
- AI Attack Vectors: Generative Deception and Excessive Agency .............................................................. 9
Path 1 — Generative deception (targeting trust) ....................................................................................... 9
Path 2 — Autonomous agents (targeting scale) .......................................................................................10
- Synthesis: The Structural Transformation of Risk ...................................................................................10
- Conclusion: Four Axioms of Modern Security Governance ....................................................................10
Glossary of Key Terms ...................................................................................................................................12
Tutorial: Discussion Questions and Assignment ...........................................................................................13
Discussion questions .................................................................................................................................13
Short written assignment (2–3 pages) ......................................................................................................13
References and Further Reading ..................................................................................................................14



Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 3 of 14
## Course Overview
This lecture opens the S1-ISI5 module by re-framing information systems (IS) security as a strategic
discipline rather than a purely technical one. Its central thesis is that the object we defend — the
information  system  —  and  the  adversaries  we  defend  against  have  both  undergone  a  structural
transformation. The IS is no longer a back-office support function but the operational core of organizational
value; the adversary is no longer an isolated individual but an industrialized ecosystem now amplified by
artificial intelligence.
The lecture proceeds in three movements. First, it establishes the foundations: what an information system
actually is, its six constituent components, and the criteria against which its security is evaluated. Second,
it maps the contemporary threat landscape — from the taxonomy of adversaries to the concrete attack
vectors that dominate the 2026 environment: Ransomware-as-a-Service, supply-chain compromise, the
insider threat, and information warfare. Third, it examines the discontinuity introduced by artificial
intelligence and synthesizes the consequences into four governing axioms for the security professional of
tomorrow.
## HOW TO READ THESE NOTES
Each section corresponds to one analytical building block. Definitions are given in academic form; empirical data
points are attributed to their source and should be treated as illustrative orders of magnitude rather than
precise constants.
Cross-references to standard frameworks — the CIA triad, ISO/IEC 27001, MITRE ATT&CK, NIS2, GDPR and the
EBIOS Risk Manager method — are provided throughout to connect this lecture to the wider curriculum.

Learning outcomes
On completion of this lecture and its associated reading, students should be able to:
- Argue why information systems security is a determinant of organizational survival and
competitiveness, not a discretionary cost centre.
- Decompose an information system into its six components and explain why security must be holistic
across all of them.
- Apply the confidentiality–integrity–availability criteria (and their extensions) to characterize a
security requirement or a breach.
- Classify threat actors using a motivation × organization matrix and situate real incidents within it.
- Explain the economic logic of Ransomware-as-a-Service, supply-chain attacks, the insider threat and
information-warfare operations.
- Assess how artificial intelligence operates as a risk multiplier across both offensive deception and
offensive scale.
- Translate the analysis into governance-level recommendations structured around four modern
security axioms.


Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 4 of 14
- The Postulate: The Information System as the Core of Value
The founding postulate of this course is that digital transformation has eradicated the notion of the IS as a
mere “support function.” In a digitalized organization, the information system is the medium through which
value is created, exchanged and recorded. Consequently, its security ceases to be a subordinate IT concern
and becomes a matter of organizational survival and competitiveness.
This shift has an immediate methodological consequence. If the IS carries the organization's value, then a
security failure does not produce a contained technical incident; it produces a business event whose impact
propagates simultaneously across operational, financial, reputational and legal dimensions. Four domains
of impact make this concrete.
Impacted domain What is at stake
Operations Business continuity and the protection of intellectual property. A loss of availability or
integrity halts the value chain itself.
Organization Maintenance of reputation and of the trust of partners. Trust, once lost, is slow and
expensive to rebuild.
Employees Data privacy and a functional working environment. Staff are both a protected
population and an operational dependency.
Compliance Legal mandates and liability — e.g. the NIS/NIS2 directive and the GDPR — which
convert security failures into regulatory and financial exposure.

The compliance dimension deserves emphasis for a Master 2 audience. Regulation has turned security from
a voluntary good practice into a legal obligation with sanctions. The GDPR governs the protection of
personal data across the EU; the NIS2 directive extends binding security and incident-reporting obligations
to a broad set of “essential” and “important” entities. Security governance is therefore inseparable from
legal accountability — a theme that recurs in the final axiom of this lecture.
## KEY TAKEAWAY
If the information system is where value now lives, then protecting it is protecting the organization. Security is
a strategic function whose failure is measured in business terms, not in technical terms.
- Defining the Territory: The Six Components of the IS
Before we can defend the information system we must define its perimeter precisely. An information
system is not reducible to its servers or its software; it is a socio-technical ensemble. The lecture identifies
six interdependent components, each of which constitutes part of the attack surface.
- Data — the most precious asset and therefore the core target of most attacks. Everything else exists
to store, move or process it.
- Applications & Software — the tools that process data and encode business logic.
- Networks — the infrastructure that transports information between components and
organizations.
- Employees — essential actors, and empirically often the weakest link through which an intrusion
begins.
- Business processes — the workflows that depend on the IS; their disruption is what turns a
technical incident into a business crisis.

Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 5 of 14
- Facilities — the physical infrastructure (data centres, premises, power, cabling) housing and
sustaining the systems.
The pedagogical point is one of interdependence. These components form a densely connected graph: a
compromise of one propagates to the others. An attacker who subverts an employee (social engineering)
obtains access to applications; through them, to data; and through data, to the business processes that
constitute value. Because the components are coupled, security cannot be applied to one in isolation.
## PRINCIPLE
Security must be holistic and coherent, covering the entire ecosystem — data, applications, networks, people,
processes and facilities — because the adversary will always target the weakest of the six.
This inventory is also the entry point of structured risk methods. In the EBIOS Risk Manager method, for
example, the first workshop establishes scope and “business assets” together with the “supporting assets”
on which they rely — a formalization of exactly this six-component territory. Naming the components is
the precondition for identifying what must be protected and against what.
- Protecting the Crown Jewels: The Evaluation Criteria
Once the territory is defined, we need criteria against which to evaluate whether it is secure. The classical
foundation is the CIA triad — Confidentiality, Integrity, Availability — which expresses the three properties
whose preservation constitutes security. Each property is defined by a principle and characterized by the
risk incurred when it fails.
Criterion Principle Characteristic risk when violated
Confidentiality Information is accessible only to
authorized entities.
Unauthorized disclosure; corporate espionage.
Integrity Data is accurate, complete and free from
unauthorized modification.
Fraud, data manipulation, silent corruption.
Availability Systems and data are usable on demand
by legitimate users.
Business paralysis; Denial of Service (DoS).

For a Master 2 audience it is worth stressing that these three properties are frequently in tension.
Hardening confidentiality (e.g. aggressive encryption and access lock-outs) can degrade availability;
maximizing availability (e.g. broad replication and open access) can erode  confidentiality. Security
engineering is therefore an exercise in calibrated trade-offs against a defined risk appetite, not in
maximizing every property at once.
The triad is also commonly extended. Traceability / non-repudiation (the ability to attribute an action to
an actor and prevent its later denial) and authenticity (proof that an entity or a message is genuinely what
it claims to be) are decisive in the 2026 environment, where AI-generated deception directly attacks
authenticity — a point developed in Section 10. These criteria are the vocabulary in which security
requirements are written and in which breaches are classified throughout the remainder of the course.
## WHY IT MATTERS
The CIA triad gives us a shared, precise language. When we later describe ransomware, a supply-chain
compromise or a deepfake, we will characterize each one by which criterion it primarily violates — availability
and integrity for ransomware, authenticity and confidentiality for deepfakes and doxing.

Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 6 of 14
- Mapping the Adversary: The Threat Evolution Matrix
Having defined what we protect and by what criteria, we turn to whom we defend against. A recurring
error is to imagine a single, generic “hacker.” In reality the adversary population is differentiated and, over
three decades, has evolved from isolated amateurs in the 1990s toward the industrialized, structured
actors of 2026. A two-axis matrix organizes this population usefully.
- Vertical axis — Motivation: from simple curiosity at the low end to financial and destructive intent
at the high end.
- Horizontal axis — Organization: from isolated / amateur actors on the left to industrial and state-
level structures on the right.
Four archetypes populate the resulting quadrants:
Actor Position Defining characteristics
Script kiddies Low motivation, low
organization
Limited technical capacity; act mainly to seek
recognition. Opportunistic rather than targeted.
Hacktivists & cyber-
terrorists
High motivation, low
organization
Driven by destabilization, destruction and political
messaging rather than profit.
Organized cybercrime High motivation, high
organization
Highly structured operations run under the
Ransomware-as-a-Service (RaaS) model. The
dominant financially-motivated threat of 2026.
Nation-states High motivation, high
organization
Focused on espionage, sabotage and geopolitical
leverage; the best-resourced and most patient
adversaries.

The strategic message of the matrix is the rightward and upward drift of the entire population. The centre
of gravity of the threat has moved into the high-motivation / high-organization quadrant, and the boundary
between organized crime and nation-states is blurring — a hybridization examined in Section 11. Defenders
are therefore no longer facing rogue individuals but structured economies and, increasingly, automated
agents. This reframing is the second of the four axioms in the conclusion.
Methodologically, this matrix corresponds to the “risk origins” (sources de risque) and their “target
objectives” analyzed in the second workshop of EBIOS Risk Manager: characterizing the adversary's
motivation and resources is a prerequisite for constructing plausible strategic attack scenarios.
- The Industrialization of Extortion: Ransomware-as-a-Service
The single most important development in the criminal threat landscape is the transition from artisanal
attacks to an industrialized service economy. The Ransomware-as-a-Service (RaaS) model organizes
cybercrime along the same division-of-labour logic as a legitimate software business, with specialized roles
connected by internal markets.
The RaaS value chain
- Boss / operators — manage the core malware and the infrastructure; they own the “product” and
the brand.
- Tool developers — write the exploits and encryption algorithms.
- Initial Access Brokers (IABs) — specialize in breaching networks and selling that access as a
commodity.

Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 7 of 14
- Affiliates — the intrusion teams that execute attacks using the operators' toolkit, sharing a
percentage of the proceeds.
This specialization is what “industrialization” means: no single actor needs to master the entire kill chain.
A capability market lowers the barrier to entry, raises the overall volume of attacks, and makes the
ecosystem resilient — dismantling one affiliate does not destroy the platform. The economic figures
reported in the source deck convey the scale of this economy.
Indicator Reported figure Source (as cited)
Ransomware revenue, 2024 ~ $813.55 million Chainalysis 2024/2025
Crypto extorted, H1 2025 ~ $460 million Chainalysis 2024/2025
Affiliate revenue traced to Russian jurisdictions ~ 74% Chainalysis 2024/2025

Two analytical points follow. First, the geographic concentration of affiliate revenue points to a geopolitical
link: a large share of proceeds is traced to Russian jurisdictions, which situates “criminal” activity within a
tolerant — sometimes instrumentalized — state context, and again blurs the crime/state boundary.
Second, students should treat these figures as attributed estimates: ransomware revenue is chronically
under-reported (many victims pay silently) and estimates are revised as blockchain analysis matures. The
order of magnitude, not the decimal, is the lesson.
## WHY IT MATTERS
Because the adversary is a resilient economy rather than a person, defence cannot aim to “catch the hacker.” It
must raise the cost and lower the yield of the whole business model — hardening initial-access vectors, ensuring
recoverable backups (defeating the extortion leverage) and disrupting the payment channel.
- Permeable Perimeters: The Supply-Chain Vector
Classical security assumed a defensible perimeter separating a trusted interior from a hostile exterior.
Digitalization  has  dissolved  that  boundary.  In  2026  the  weakest  link  is  frequently not  inside the
organization at all; it is embedded in the organization's most trusted partnerships. This is the supply-chain
attack vector, and its signature is the domino effect: a compromise at a distant supplier (Tier 1) cascades
through vendors, intermediaries and logistics partners until it reaches the target IS.
Principal sub-vectors
- Software vendors — compromising a legitimate software update so that a single poisoned release
infects all downstream users simultaneously (the pattern of the SolarWinds-class attacks).
- Trusted intermediaries — targeting subcontractors, managed-service providers or telecom
operators who legitimately hold access to the target IS.
- Mergers & acquisitions — acquiring (or infiltrating) a previously compromised company to obtain a
discreet, pre-installed internal entry point.
The mechanism exploits transitive trust: organization A trusts supplier B, and B trusts sub-supplier C, so a
compromise of C inherits, hop by hop, the access rights that A granted to B. Security spending concentrated
on one's own perimeter is therefore structurally insufficient; the effective attack surface is the union of
every partner's security posture.
## GOVERNANCE RESPONSE

Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 8 of 14
The supply-chain vector is precisely why NIS2 extends obligations to the supply chain and why third-party risk
management, contractual security clauses and a “never trust, always verify” (Zero Trust) posture toward partner
connections have become mandatory rather than optional. This anticipates the third axiom: trust itself is now
an attack surface.
## 7. The Insider Threat: Access Over Intent
Not every adversary comes from outside. The insider threat is distinctive because it inverts the usual
relationship between intent and capability. An external attacker must acquire access; an insider already
possesses it. As the source deck reports, employees are the origin of only around 16% of attacks, yet their
potential for critical disruption is disproportionate — and surveys cited indicate that up to 50% of
employees would consider corporate sabotage under certain conditions. Low frequency, high severity.
The severity of the insider threat is best understood as the intersection of two forms of privileged
knowledge:
- Technical expertise — system access and elevated IT privileges (the “keys”).
- Business logic — knowledge of critical workflows and of exactly where the valuable data resides
## (the “map”).
The ultimate threat is the actor who combines both: someone who knows exactly what to break to cause
maximum damage and holds the keys to do it. This is why insider risk cannot be managed by perimeter
controls; it must be managed through identity governance, least privilege, separation of duties, monitoring
of privileged accounts and disciplined off-boarding.
Primary motivations
- Financial gain — selling access or data to competitors or to criminal groups (a natural buyer being
the Initial Access Brokers of Section 5).
- Retaliation — grievance arising from lack of recognition, conflict, or anticipated dismissal.
## ANALYTICAL BRIDGE
The insider is the human hinge between the RaaS economy and the supply-chain vector: a bribed or disgruntled
employee at a trusted intermediary is simultaneously an insider threat and a supply-chain vulnerability. This is
why the modern discipline speaks of managing identities and relationships, not just networks.
- Information Warfare: E-Reputation and Destabilization
A final category of attack extracts no capital at all. Its objective is to erode the foundation of citizen and
market trust — to destabilize rather than to steal. For organizations and states alike, reputation and the
perceived integrity of the information environment are themselves assets under attack. The source deck
frames this as a destabilization playbook with four principal instruments.
Instrument Mechanism and objective
Distributed Denial of Service (DDoS) Paralyzing a target's activity to demonstrate its weakness publicly — an
attack on availability with a reputational payload.
Data leaks (doxing) Weaponizing sensitive information for blackmail or political pressure — an
attack on confidentiality repurposed for coercion.
Defacement Altering an organization's public web presence to broadcast ideological
messaging — an attack on integrity and image.

Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 9 of 14
Instrument Mechanism and objective
Synthetic disinformation Leveraging fake news — increasingly AI-generated — to manipulate
diplomacy, elections and corporate valuations. An attack on authenticity at
societal scale.

The strategic significance of information warfare is that it targets the cognitive layer above the technical
one. A DDoS or a defacement may be technically modest yet strategically effective if it undermines
confidence in an institution. Synthetic disinformation in particular connects directly to the next part of the
lecture: the same generative-AI capabilities that fabricate a convincing news item also fabricate a
convincing executive voice. Trust in the authenticity of information is the shared target.
- The 2026 Catalyst: Artificial Intelligence as a Risk Multiplier
Everything preceding describes an environment that was already industrialized and porous. Artificial
intelligence is the catalyst that changes the shape of the risk curve itself. The transition is from linear,
human-operated  intrusion  campaigns  to  exponential,  autonomous  and  highly  personalized  threat
ecosystems — the shift from “manual human attacks” along a flat curve to “autonomous AI attacks” on a
steep activation curve.
## THE CIGREF 2026 INSIGHT
“The emergence of cutting-edge AI in cyber-offense is not an incremental evolution... it mathematically and
operationally renders traditional defense postures obsolete.”
— as cited in the source deck (CIGREF, 2026)
The claim is strong and deserves careful reading. “Obsolete” does not mean that firewalls or endpoint
controls stop functioning; it means that defensive postures predicated on the tempo and cost of human
attackers lose their assumptions. If reconnaissance, exploitation and social engineering can be produced
at machine speed and near-zero marginal cost, then defences calibrated to human-scale attack rates are,
quantitatively, outmatched. AI is a risk multiplier precisely because it scales existing attack techniques
rather than inventing wholly new ones — the vectors of Sections 5–8 are the same, executed faster,
cheaper and more convincingly.
The consequence for the defender is a change of regime, not merely of degree: detection and response
must themselves move toward automation and machine speed, because a human-in-the-loop response
time may be structurally too slow for an autonomous attack. This is the empirical basis for the fourth axiom.
- AI Attack Vectors: Generative Deception and Excessive
## Agency
The AI risk profile bifurcates into two complementary paths. The first weaponizes AI's generative capability
to attack trust; the second weaponizes AI's autonomy to attack at scale. Together they raise both the
quality and the quantity of attacks simultaneously.
Path 1 — Generative deception (targeting trust)
- Deepfakes & audio cloning — usurping executive identities to bypass human verification. A cloned
CEO voice or video authorizing a transfer defeats controls that ultimately rely on a human
recognizing a person — a direct attack on authenticity.

Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 10 of 14
- Hyper-personalized spear-phishing — LLM-generated campaigns with flawless grammar and deep
contextual knowledge of the target, removing the linguistic and contextual tells that traditionally
exposed phishing.
Path 2 — Autonomous agents (targeting scale)
- Automated reconnaissance — AI scanning networks to identify vulnerabilities infinitely faster than
human teams, compressing the discovery phase of the kill chain.
- Lateral movement — AI agents piloting tools, testing credentials and pivoting through
environments without requiring a human operator — the phenomenon of “excessive agency,”
where an autonomous system acts beyond intended boundaries.
The two paths are multiplicative. Generative deception raises the success probability per attempt (each
lure is more convincing); autonomous agency raises the number of attempts per unit time and cost. Their
product is the exponential curve of Section 9. Note also that “excessive agency” is a risk not only of the
attacker's AI but of the defender's own AI systems: an over-privileged internal agent is itself an attack
surface — a theme that connects security to the governance of autonomous algorithms in the final axiom.
## DEFENSIVE ORIENTATION
Countering Path 1 requires strengthening authenticity controls that do not depend on human perception —
cryptographic signing, multi-channel verification of high-value instructions, and out-of-band confirmation.
Countering Path 2 requires machine-speed detection and strict least-privilege boundaries around every
automated identity, human or non-human.
- Synthesis: The Structural Transformation of Risk
Drawing the threads together, the source deck offers a synthesis attributed to EY (2026): cybersecurity has
crossed a maturity threshold. It is no longer an isolated technical IT issue but a systemic governance
imperative. Systemic cyber risk now sits at the  intersection of three forces —  geopolitics,  digital
transformation and economic models — each of which we have seen in operation: geopolitics in the state-
tolerated RaaS economy, digital transformation in the dissolution of the perimeter, and economic models
in the industrialization of extortion.
The new reality, in three propositions
- Impacts are transversal — a single breach simultaneously triggers operational collapse, financial
hemorrhage and reputational ruin. There is no longer a purely “technical” incident.
- Threats are hybridized — industrialized crime syndicates now wield state-level AI tools, and the
crime/state distinction ceases to be operationally meaningful for the defender.
- The required response is integrated — resilience demands the combination of executive
governance, advanced AI-enabled defensive technologies and strict identity management. No single
layer suffices.
The word systemic is the operative one. A systemic risk cannot be delegated to a technical team and
considered handled; it must be owned at board level, integrated into enterprise risk management, and
treated with the same seriousness as financial or geopolitical risk. This is exactly the posture that risk-
management methods such as EBIOS Risk Manager institutionalize by linking technical scenarios to
business stakes and to a governed treatment plan.
- Conclusion: Four Axioms of Modern Security Governance

Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 11 of 14
The lecture concludes by compressing its analysis into four axioms. They are deliberately framed as
governing principles rather than technical controls, because the central argument of the course is that
security has become a governance discipline.
# Axiom Implication for the professional
01 The IS is a living ecosystem Protecting isolated technologies is futile; defence must account for
data, people, processes and facilities holistically (Sections 2–3).
02 The adversary is industrialized We defend against structured economies and automated agents, not
rogue individuals (Sections 4–5, 9–10).
03 Trust is the primary attack surface Vendors, partners and elevated employee identities are the
preferred entry vectors. Assume breach (Sections 6–7).
04 Security is systemic governance Tomorrow's professional does not merely secure networks; they
govern relationships, permissions, dependencies and autonomous
algorithms (Sections 8, 11).

“Assume breach” — the operational corollary of Axiom 3 — is the mindset that unifies the four. It replaces
the obsolete goal of a perfect, impermeable perimeter with the realistic goals of limiting blast radius,
detecting quickly and recovering reliably. A student who leaves this lecture with a single sentence should
leave with this one: in 2026 we no longer ask whether the fortress can be breached, but how resiliently the
organization operates once it is.
## CLOSING STATEMENT
The professional of tomorrow is not only a network defender but a governor of trust — of relationships,
permissions, dependencies and, increasingly, of autonomous algorithms. That is the vocation this Master 2
programme prepares you for.


Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 12 of 14
Glossary of Key Terms
## Term Definition
CIA triad Confidentiality, Integrity, Availability — the three foundational properties whose
preservation defines information security.
RaaS Ransomware-as-a-Service: a criminal business model in which ransomware operators
lease their toolkit and infrastructure to affiliates in exchange for a share of proceeds.
Initial Access Broker (IAB) A specialized criminal actor who breaches networks and sells the resulting access as a
commodity to other attackers.
Supply-chain attack An attack that reaches a target by first compromising a trusted supplier, vendor or
intermediary, exploiting transitive trust.
Insider threat A security risk originating from a person with legitimate access (employee, contractor)
who misuses it, deliberately or negligently.
Doxing The weaponization of leaked sensitive information for blackmail, coercion or
reputational damage.
Deepfake Synthetic audio, image or video generated by AI to convincingly impersonate a real
person; an attack on authenticity.
Excessive agency The risk that an autonomous (AI) system acts beyond its intended boundaries, whether
an attacker's agent or an over-privileged internal one.
Zero Trust A security model that grants no implicit trust based on network location; every access
request is authenticated, authorized and continuously verified.
EBIOS Risk Manager A French (ANSSI) risk-management method that links business stakes, threat sources
and attack scenarios to a governed risk-treatment plan.
NIS2 EU directive extending binding cybersecurity and incident-reporting obligations,
including supply-chain requirements, to essential and important entities.


Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 13 of 14
Tutorial: Discussion Questions and Assignment
Discussion questions
- Choose a recent, publicly documented breach. Decompose it across the six components of the IS
and identify which the attacker exploited first, and why.
- Ransomware primarily violates availability and integrity. Argue whether an organization with
perfect, tested, offline backups still has a ransomware problem — and what the residual risk is.
- The deck reports ~74% of affiliate revenue traced to Russian jurisdictions. Discuss the consequences
of this geopolitical concentration for law-enforcement and for the crime/state boundary.
- The insider threat combines technical expertise and business logic. Design three controls that
reduce insider risk without degrading a functional working environment (a trade-off from Section 3).
- Evaluate the CIGREF claim that AI “renders traditional defense postures obsolete.” Is this a claim
about capability, tempo, or cost? Defend your reading.
- Reformulate the four axioms as four measurable governance objectives that a CISO could report to
a board.
Short written assignment (2–3 pages)
Select one organization (real or fictional but realistic). Using the threat-evolution matrix (Section 4), identify
the two adversary archetypes most relevant to it and justify the choice. Then, for one plausible attack
scenario, trace the vector (Sections 5–8), state which CIA/authenticity criteria it violates, and propose an
integrated response aligned with the four axioms. Where useful, structure the reasoning in the spirit of
EBIOS Risk Manager (business stakes → risk sources → strategic scenario → treatment).


Master 2 Cybersecurity — Sorbonne (S1-ISI5) The Evolving Cyber Battlefield
Page 14 of 14
References and Further Reading
Sources cited in the source lecture deck:
- Chainalysis (2024/2025), Crypto Crime Report — ransomware revenue and extortion figures.
- CIGREF (2026), analysis of AI in cyber-offense (as cited in the source deck).
- EY (2026), synthesis on the structural transformation of cyber risk (as cited in the source deck).
Complementary academic and institutional references:
- ANSSI, EBIOS Risk Manager — the method guide (Agence nationale de la sécurité des systèmes
d'information).
- ISO/IEC 27001 and 27005 — Information security management systems and information security
risk management.
- MITRE ATT&CK® — knowledge base of adversary tactics and techniques.
- European Union, Directive (EU) 2022/2555 (NIS2); Regulation (EU) 2016/679 (GDPR).
- ENISA, Threat Landscape (annual) — corroborating trend data on ransomware, supply chain and AI-
enabled threats.

Lecture notes derived from the S1-ISI5 deck “The Evolving Cyber Battlefield.” Empirical figures are reproduced as attributed in the
source and should be read as illustrative orders of magnitude.