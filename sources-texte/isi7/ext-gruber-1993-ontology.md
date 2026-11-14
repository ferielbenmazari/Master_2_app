<!-- Source externe (hors supports du cours ISI7), ajoutée le 2026-11-14 (docs/06 §9.6).
Référence : T. R. Gruber, « A Translation Approach to Portable Ontology Specifications », Knowledge Acquisition 5(2):199-220, 1993.
URL : https://tomgruber.org/writing/ontolingua-kaj-1993.pdf (site de l’auteur) — consulté le 2026-11-14. Extraits copiés tels quels (pdftotext). -->

# Gruber (1993) — extrait

## Ontology definition

   This allows researchers to share and reuse ontologies, while retaining the computational benefits
   of specialized implementations.
       We discuss how the translation approach to portability addresses several technical problems.
   One problem is how to accommodate the stylistic and organizational differences among
   representations while preserving declarative content. Another is how to translate from a very
   expressive language into restricted languages, remaining system-independent while preserving
   the computational efficiency of implemented systems. We describe how these problems are
   addressed by basing Ontolingua itself on an ontology of domain-independent, representational
   idioms.


1. Introduction
A body of formally represented knowledge is based on a conceptualization: the objects,
concepts, and other entities that are presumed to exist in some area of interest and the
relationships that hold them (Genesereth & Nilsson, 1987). A conceptualization is an
abstract, simplified view of the world that we wish to represent for some purpose.
Every knowledge base, knowledge-based system, or knowledge-level agent is
committed to some conceptualization, explicitly or implicitly.
    An ontology is an explicit specification of a conceptualization. The term is borrowed
from philosophy, where an ontology is a systematic account of Existence. For
knowledge-based systems, what “exists” is exactly that which can be represented.
When the knowledge of a domain is represented in a declarative formalism, the set of
objects that can be represented is called the universe of discourse. This set of objects,
and the describable relationships among them, are reflected in the representational
vocabulary with which a knowledge-based program represents knowledge. Thus, we
can describe the ontology of a program by defining a set of representational terms. In
such an ontology, definitions associate the names of entities in the universe of discourse
(e.g., classes, relations, functions, or other objects) with human-readable text describing
what the names are meant to denote, and formal axioms that constrain the
interpretation and well-formed use of these terms.
     This paper addresses the problem of portability for ontologies. Portability is a
problem because the parties to a common ontology may use different representation
languages and systems. Ideally, shared terms should be defined at the knowledge level,
independent of specific representation languages. Of course, definitions need to be
couched in some common formalism if they are to be shareable by knowledge-based
applications. However, it is not realistic or desirable to require that those applications
be implemented in a common representation language or system. This is because
different applications require different kinds of reasoning services, and special-purpose
languages to support them. Thus, the portability problem for ontologies is to support
common ontologies over multiple representation systems.
    We describe a translation approach to the portability problem for ontologies. In a
translation approach, ontologies are specified in a standard, system-independent form
and translated into specific representation languages. In Section 3 we will describe
Ontolingua, an implemented system for translating ontologies from a declarative,
predicate-calculus language into a variety of representation systems. In Section 4 we
discuss the strengths and limitations of the approach. But first, we define the notion of
