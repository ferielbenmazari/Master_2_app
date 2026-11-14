<!-- Source externe (hors supports du cours ISI7), ajoutée le 2026-11-14 (docs/06 §9.6).
Référence : Z. Dehghani, « Data Mesh Principles and Logical Architecture », martinfowler.com, 3 décembre 2020.
URL : https://martinfowler.com/articles/data-mesh-principles.html — consulté le 2026-11-14. Extraits copiés tels quels (conversion HTML → texte). -->

# Dehghani (2020) — extraits

## Résumé

data, demands a paradigm shift in how we manage data at scale. While the
 technology advances of the past decade have addressed the scale of volume of
 data and data processing compute, they have failed to address scale in other
 dimensions: changes in the data landscape, proliferation of sources of data,
 diversity of data use cases and users, and speed of response to change. Data
 mesh addresses these dimensions, founded in four principles: domain-oriented
 decentralized data ownership and architecture, data as a product, self-serve
 data infrastructure as a platform, and federated computational governance.
 Each principle drives a new logical view of the technical architecture and
 organizational structure.

## Les quatre principes

To achieve this objective, I suggest that there are four
 underpinning principles that any data mesh
 implementation embodies to achieve the promise of scale, while delivering
 quality and integrity guarantees needed to make data usable : 1) domain-oriented
 decentralized data ownership and architecture, 2) data as a product,
 3) self-serve data infrastructure as a platform, and 4) federated computational governance. 
 While I expect the practices, technologies and implementations of these
 principles vary and mature over time, these principles remain unchanged. 
I have intended for the four principles to be collectively necessary
 and sufficient ; to enable scale with resiliency while addressing concerns
 around siloing of incompatible data or increased cost of operation.
 Let's dive into each principle and then design the conceptual architecture
 that supports it. 
Domain Ownership 
Data mesh, at core, is founded in decentralization 
 and distribution of responsibility to people who are
 closest to the data in order to support continuous change and scalability.
 The question is, how do we decompose and decentralize the components of the
 data ecosystem and their ownership.
 The components here are made of analytical data , 
 its metadata , and the computation necessary to serve it. 
Data mesh follows the seams of organizational units as the axis of
 decomposition. Our organizations today are decomposed based on their
 business domains. Such decomposition localizes the impact of continuous
 change and evolution - for the most part - to the domain’s 
 bounded context .
 Hence, making the business domain’s bounded context a good candidate for
 distribution of data ownership. 
