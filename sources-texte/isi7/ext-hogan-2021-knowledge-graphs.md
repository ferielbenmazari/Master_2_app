<!-- Source externe (hors supports du cours ISI7), ajoutée le 2026-11-14 (docs/06 §9.6).
Référence : A. Hogan et al., « Knowledge Graphs », ACM Computing Surveys 54(4), article 71, 2021 (arXiv:2003.02320v6).
URL : https://arxiv.org/pdf/2003.02320v6 — consulté le 2026-11-14. Extraits copiés tels quels (pdftotext). -->

# Hogan et al. (2021) — extraits

## Introduction et définition

                                         Though the phrase “knowledge graph” has been used in the literature since at least 1972 [465], the
                                         modern incarnation of the phrase stems from the 2012 announcement of the Google Knowledge
                                         Graph [484], followed by further announcements of the development of knowledge graphs by
                                         Airbnb [87], Amazon [298], eBay [417], Facebook [387], IBM [128], LinkedIn [224], Microsoft [482],
                                         Uber [214], and more besides. The growing industrial uptake of the concept proved difficult for
                                         academia to ignore: more and more scientific literature is being published on knowledge graphs,
                                         which includes books (e.g. [425]), as well as papers outlining definitions (e.g., [141]), novel techniques
                                         (e.g., [318, 424, 553]), and surveys of specific aspects of knowledge graphs (e.g., [400, 549]).
                                            Underlying all such developments is the core idea of using graphs to represent data, often
                                         enhanced with some way to explicitly represent knowledge [387]. The result is most often used in
                                         application scenarios that involve integrating, managing and extracting value from diverse sources
                                         of data at large scale [387]. Employing a graph-based abstraction of knowledge has numerous
                                         benefits in such settings when compared with, for example, a relational model or NoSQL alternatives.
                                         Graphs provide a concise and intuitive abstraction for a variety of domains, where edges capture the
                                         (potentially cyclical) relations between the entities inherent in social data, biological interactions,
bibliographical citations and co-authorships, transport networks, and so forth [17]. Graphs allow
maintainers to postpone the definition of a schema, allowing the data – and its scope – to evolve in
a more flexible manner than typically possible in a relational setting, particularly for capturing
incomplete knowledge [3]. Unlike (other) NoSQL models, specialised graph query languages support
not only standard relational operators (joins, unions, projections, etc.), but also navigational
operators for recursively finding entities connected through arbitrary-length paths [16]. Standard
knowledge representation formalisms – such as ontologies [70, 239, 366] and rules [254, 288] –
can be employed to define and reason about the semantics of the terms used to label and describe
the nodes and edges in the graph. Scalable frameworks for graph analytics [335, 503, 563] can
be leveraged for computing centrality, clustering, summarisation, etc., in order to gain insights
about the domain being described. Various representations have also been developed that support
applying machine learning techniques directly over graphs [549, 559].
   In summary, the decision to build and use a knowledge graph opens up a range of techniques that
can be brought to bear for integrating and extracting value from diverse sources of data. However,
we have yet to see a general unifying summary that describes how knowledge graphs are being
used, what techniques they employ, and how they relate to existing data management topics.
   The goal of this tutorial paper is to motivate and give a comprehensive introduction to knowl-
edge graphs: to describe their foundational data models and how they can be queried; to discuss
representations relating to schema, identity, and context; to discuss deductive and inductive ways
to make knowledge explicit; to present a variety of techniques that can be used for the creation
and enrichment of graph-structured data; to describe how the quality of knowledge graphs can be
discerned and how they can be refined; to discuss standards and best practices by which knowledge
graphs can be published; and to provide an overview of existing knowledge graphs found in practice.
Our intended audience includes researchers and practitioners who are new to knowledge graphs.
As such, we do not assume that readers have specific expertise on knowledge graphs.
   Knowledge graph. The definition of a “knowledge graph” remains contentious [40, 57, 141], where
a number of (sometimes conflicting) definitions have emerged, varying from specific technical
proposals to more inclusive general proposals; we address these prior definitions in Appendix A.
Herein we adopt an inclusive definition, where we view a knowledge graph as a graph of data
intended to accumulate and convey knowledge of the real world, whose nodes represent entities of
interest and whose edges represent relations between these entities. The graph of data (aka data graph)
conforms to a graph-based data model, which may be a directed edge-labelled graph, a property
graph, etc. (we discuss concrete alternatives in Section 2). By knowledge, we refer to something
that is known1 . Such knowledge may be accumulated from external sources, or extracted from the
knowledge graph itself. Knowledge may be composed of simple statements, such as “Santiago is
the capital of Chile”, or quantified statements, such as “all capitals are cities”. Simple statements
can be accumulated as edges in the data graph. If the knowledge graph intends to accumulate
quantified statements, a more expressive way to represent knowledge – such as ontologies or rules
– is required. Deductive methods can then be used to entail and accumulate further knowledge (e.g.,
“Santiago is a city”). Additional knowledge – based on simple or quantified statements – can also be
extracted from and accumulated by the knowledge graph using inductive methods.
   Knowledge graphs are often assembled from numerous sources, and as a result, can be highly
diverse in terms of structure and granularity. To address this diversity, representations of schema,
identity, and context often play a key role, where a schema defines a high-level structure for the
knowledge graph, identity denotes which nodes in the graph (or in external sources) refer to
the same real-world entity, while context may indicate a specific setting in which some unit of
1 A number of specific definitions for knowledge have been proposed in the literature on epistemology.

## Graph abstraction

      Appendix B enumerates formal definitions that will be referred to from the body of the paper.

2     DATA GRAPHS
At the foundation of any knowledge graph is the principle of first applying a graph abstraction to
data, resulting in an initial data graph. We now discuss a selection of graph-structured data models
that are commonly used in practice to represent data graphs. We then discuss the primitives that
form the basis of graph query languages used to interrogate such data graphs.

2.1     Models
Leaving aside graphs, let us assume that the tourism board from our running example has not
yet decided how to model relevant data about attractions, events, services, etc. The board first
considers using a tabular structure – in particular, relational databases – to represent the required
data, and though they do not know precisely what data they will need to capture, they start to
design an initial relational schema. They begin with an Event table with five columns:
                                    Event(name, venue, type, start, end)
where name and start together form the primary key of the table in order to uniquely identify
recurring events. But as they start to populate the data, they encounter various issues: events may

                                                            4
have multiple names (e.g., in different languages), events may have multiple venues, they may
not yet know the start and end date-times for future events, events may have multiple types, and
so forth. Incrementally addressing these modelling issues as the data become more diverse, they
