<!-- Page 1 -->
Appendix 1 - Requirements Specification in VariaMos with
SECRET

Version 2.0. Last update: Nov 2024.

Table of Contents

Introduction 3
1. Description of a Text Editor Product Line 3
2. Modeling requirements 6
Project name: Enter a name for your project, i.e. Editors. 6
Product line name: Enter a name for your product line name, i.e. Text editors. 6
Type: Choose either "Software" or "System" based on the nature of your application. It is
“Software” in this case. 6
Domain: Select the domain corresponding to your product line. You can keep the domain as the
default value if you are unsure of the domain i.e. Education. 6
1. Defining Domain Requirements 6
1.1. Creating a Domain Requirements model: 6
1.2. Utilizing the SECRET Template: 9
1.3. Specifying Functional Requirements: 1
FR1-Mandatory save file feature 1
FR9 - Auto-Save 4
1.4. Addressing Non-Functional Requirements and Constraints 9
NFR1 – External Interfaces 10
NFR1- If the text editors are to be portable, then all systems of the text editors product line shall
support a variety of devices. 10
CR3 - Maximum File Size Limit (All Systems) 14
CR3- All systems of the text editors product line shall have a file size of maximum 100MB. 14
1.5. Addressing Security Requirements 17
SR1 - Confidentiality: 17
1.6. Defining relationships between the requirements 25
1.7. Adding related security requirements 27
1.8. Generate the SRS/SyRS (Software/System Requirements Specification) 28
3. Proposed activity: Specifying Requirements for a Text Editor Product Line 30
3.1. Functional Requirements: 30
3.2. Complex constraints 30
3.3. Quality Requirements: 30
NFR1- If the text editors are to be portable then all text editors of the text editors product line shall
support a variety of devices. 30
3.4. Security Requirements: 31
● Create a new project and a text editor product line (Type software, domain software and web
services) 31
● Define the functional requirements 31

<!-- Page 2 -->
● Similarly, define the NFR 31
● Define the Security requirement 31
● Add or define the dependency between the requirements 31
● Add related security requirements by right-clicking on the security requirement, then
choosing related requirements 31
● Generate the SRS/SyRS (Software/System Requirements Specification) document 31

Introduction
This tutorial document aims to provide comprehensive guidance on specifying Domain Requirements
in VariaMos. In particular, it is designed to assist users in specifying functional, non-functional, and
security requirements for product lines using a template to structure natural language called SECRET.
To show how to specify domain requirements, it uses a product line of text editors as a practical
example.

Prerequisites:

● The use of Google Chrome is recommended (please install it if you don't have it)..
● Have access to the VariaMos platform (good internet connection required).
● Basic understanding of software development and variability modeling.
● Tutorial 0 - Creating projects, product lines and products in VariaMos

1. Description of a Text Editor Product Line
Within the context of our tutorial document focused on the Domain Requirements - AC (auto
complete) language in VariaMos, let's explore a hypothetical product line centered around a simple
text editor. This product line is designed to cater to users with varying requirements, providing a range
of features to meet different needs and preferences. Below is a description of this product line:
Overview:
The product line encompasses a collection of text editors, each offering unique features and
capabilities while sharing a common core functionality of text editing. This product line's
primary objective is to provide a range of text editing solutions that can be customized to suit
individual preferences while ensuring a consistent user experience.
Key Features:
● Simple Text Editor:
Description: This basic text editor is designed for simplicity and ease of use. It offers
essential functionality, including text creation, editing, copying, and pasting. Users can
save and open files effortlessly.
● Advanced Text Editor:
Description: The advanced text editor caters to users who require additional formatting
options and features. It includes functionalities such as font selection, font size adjustment,
text styling (bold and italics), and alignment control.
● Minimalist Text Editor:
Description: For users seeking a distraction-free text editing experience, the minimalist
text editor provides a clean and clutter-free interface with essential editing and saving
capabilities.

<!-- Page 3 -->
● Collaborative Text Editor:
Description: This specialized text editor is built for collaborative work. It enables real-time
editing and collaboration among multiple users on the same document, making it ideal for
team projects and document review.
● Secure Text Editor:
Description: Security-conscious users will appreciate the secure text editor, which includes
encryption features to ensure the confidentiality of sensitive documents. It also offers
password protection and secure file storage options.
Functional Requirements:
● FR1 - Mandatory Save File Feature: All systems within our product line shall provide
users with the essential ability to save their files, ensuring that their work is securely
preserved.
● FR2 - Mandatory Open File Feature: Users can seamlessly open files within the systems,
allowing for easy access to their previous work.
● FR3 - Optional Font Feature: Some systems in our product line offer users the flexibility
to customize the font style to suit their preferences.
● FR4 - Optional Font Size Feature (but requires Font Feature): In addition to font
customization, certain systems also enable users to adjust the font size, enhancing text
readability.
● FR5 - Optional Bold Font Feature (but requires Font Feature): For those systems that
include font customization, users can apply bold formatting to their text.
● FR6 - Optional Italics Font Feature (but requires Bold Feature): Systems offering the bold
font feature also allow users to apply italics to their text for added emphasis.
● FR7 - Optional Align Feature (but requires Font Feature): In systems with the font
customization feature, users have the capability to align their text as per their
requirements.
● FR8 - Spell-Check: All text editors across our product line will automatically perform
spell-check on typed text, ensuring accuracy and professionalism.
● FR9 - Auto-Save: To prevent data loss, all text editors will feature an auto-save
functionality that periodically saves the user's work.
● FR10 - Text Editing: Users can easily edit their text, providing a seamless writing and
editing experience.
● FR11 - Copy Text: Our text editors enable users to copy text, facilitating the efficient
transfer of content.
● FR12 - Paste Text: Users can paste text with ease, simplifying content importation.
● FR13 - Search Text: All text editors provide users with a robust search function to locate
specific content within their documents.
● FR14 - Replace Text (Some Systems): In selected systems, users have the option to
replace text, streamlining text modification.
● FR15 - Export Text (Some Systems): Certain text editors allow users to export their text,
supporting compatibility with other software and formats.
● FR16 - Import Files (Some Systems): Users can import files into specific text editors,
enabling seamless integration of external content.
● FR17 - Unsaved Changes Prompt (All Systems): If the user attempts to close the text
editor without saving changes to an open file, then, regardless of variability in specific
features across the diverse text editors within our product line, all systems shall assign a
high priority to the critical functionality of displaying a prompt.
● FR18 - Incompatible File Format Error (Certain Systems): If the user attempts to open a
file that is not in a compatible text format, then, with consideration for variability in
specific features, those systems within the diverse text editors product line that include the

<!-- Page 4 -->
"Rich Text Format (RTF)" feature shall impose a restriction. This restriction prioritizes the
critical activity of displaying an error message.
● FR19 - Auto-Correct Suggestions (Selected Systems): During the spell-check process, and
with consideration for variability in specific features, those systems within the diverse text
editors product line that include the auto-correct feature shall impose suggesting
corrections.
● FR20 - Universal Clipboard Integration (All Systems): When a user performs a copy
operation, all systems within the diverse text editors product line shall assign a high
priority to the critical functionality of storing the copied text. This stored text shall be
stored in the universal clipboard.
● FR21 - Font Customization (All Systems): In case the text font capacity is included,
regardless of variability in specific features, all systems within the diverse text editors
product line shall prioritize the essential functionality of providing the user with the ability
to change the font style.
● FR22 - Find and Replace Confirmation (Selected Systems): In case the "Find and
Replace" feature is included, and considering variability in specific features, those systems
within the diverse text editors product line that support prompts shall prioritize the critical
functionality of providing the user with the ability to approve the changes.
● FR23 - Export File Specification (Selected Systems): Before initiating the export process,
and with consideration for variability in specific features, those systems within the diverse
text editors product line that include the export feature shall impose providing the user
with the ability to specify the destination file as the object.
● FR28 - Dynamic Text Formatting (All Systems): After the user pastes text into the
document, regardless of variability in specific features, all systems within the diverse text
editors product line shall adjust the text format.

Other non-functional requirements:
Constraints:
● CR1 - Font Attribute Constraints: If the font family attribute is set to "System," the bold
font characteristic cannot be applied.
● CR2 - Align Attribute Constraints: When the font family attribute is set to "System," the
align feature can only be set to "Centered."
● CR3 - Maximum File Size Limit (All Systems): All systems within the diverse text editors
product line shall assign a high priority to ensuring that each file, regardless of variability
in specific features, has a file size of a maximum of 100MB.
● CR4- Concurrent Open File Limit (All Systems): All systems within the diverse text
editors product line shall restrict the concurrent open files activity. This constraint ensures
that, regardless of variability in specific features, each system shall restrict the number of
concurrent open files to a maximum of five.
Quality Requirements:
● NFR1 – External Interfaces: All text editors within our product line are designed to work
seamlessly on multiple devices, ensuring accessibility and flexibility if the text editors are
to be portable.
● NFR2 – Usability: Every text editor in the product line must guarantee user-friendly
interfaces, prioritizing ease of use and enhancing the overall user experience.
Security Requirements:

<!-- Page 5 -->
● SR1 - Confidentiality: Certain text editors within the product line are required to maintain
the confidentiality of text through encryption methods compliant with ISO 27001:2022
standards, safeguarding sensitive information from unauthorized access or disclosure.
● SR2 – Integrity: Specific text editors of the product line must ensure the integrity of text
content, but only if the text is designated as confidential. This ensures that the information
remains unchanged and reliable, maintaining its trustworthiness and accuracy.

2. Project creation
Visit the VariaMos website https://app.variamos.com and create a project as described in the tutorial
Tutorial 0 - Creating projects, product lines and products in VariaMos and then fill in the project
details:
Project name: Enter a name for your project, i.e. Editors.
Product line name: Enter a name for your product line name, i.e. Text editors.
Type: Choose either "Software" or "System" based on the nature of your application. It is “Software”
in this case.
Domain: Select the domain corresponding to your product line. You can keep the domain as the
default value if you are unsure of the domain i.e. Education.

2. Defining Domain Requirements
2.1. Creating a domain requirement model
1. After successfully creating a project, navigate to the project workspace.
2. To define domain functional and non-functional (e.g., security) requirements as well as
domain constraints (e.g., technical and project constraints) for your product line, you will need
to create a new "Domain Requirements - AC model" (AC stands for auto-complete since the
language has an autocomplete service for the template) This model will serve as the container
for your requirements.

<!-- Page 6 -->
1. Add functional requirements (drag and drop)

1. Define the properties of the requirement (right-click on the requirement shape and select
properties)

<!-- Page 7 -->
The fields of the properties are the following:
● Identifier: A unique identifier for the requirement.
● Version: The current version of the requirement (to track its evolution).
● DateCreated: The date when the requirement was first created (to trace the requirement
over time).
● LastUpdated: The date of the last update to the requirement (to trace the requirement over
time).
● DeliverableDate: The date or deadline for delivering the requirement (functionality).
● Difficulty: The difficulty level of achieving the requirement.
● StakeholderPriority: The priority of the requirement for the stakeholder.
● SourceStakeholder: The stakeholder who is the source of the requirement (traceability to
the stakeholder).
● RefDocument: The document where the source or explanation of the requirement can be
found.
● Risk: Consequences or risks of non-compliance.
● Constraints: Constraints that affect the lifecycle of the system of interest, such as cost,
schedule, political, and operational aspects.
● Rationale: The justification for establishing each requirement must be captured. The
rationale provides the reason why the requirement is necessary and refers to any analysis,
business study, modeling, simulation, or other substantial objective evidence.
● Applicability: Whether the requirement is applicable in reality or not.
● ComponentName: The name of the component related to the requirement.
● Description: The text of the requirement (corresponds to the SECRET template discussed
below)

<!-- Page 8 -->
1.1.Using the SECRET Template:
Define the description of the requirement (in the properties). As expected, the text will be
suggested according to the part of the SECRET template and according to the type of
requirement:
The language adopts the following SECRET template that allows defining requirements
(Functional, Security, and Other Non-Functional) for product lines. The template is divided into a
problem space and a solution space, and it is composed of the following 11 sections:
1. Conditions under which a behavior occurs (optional)
2. Family of systems, system or part of a system (Family of systems in this case since it is a
product line)
3. The degree of priority
4. The activity
5. Security Criteria (optional – reserved for security requirements)
6. Object or Objects
7. Conditionality in the object (optional)
8. The complementary details (optional)
9. Security Mechanism (optional – reserved for security requirements)
10. Validation Criterion or Standard (optional)
11. Relax requirements statements for self-adaptive systems (optional)

<!-- Page 9 -->


<!-- Page 10 -->
1.2.Specifying Functional Requirements:
The functional requirements do not have the security criteria and security mechanisms parts of the
template since they are not concerned with the security aspects.

FR1-Mandatory save file feature
All systems within our product line shall provide users with the essential ability to save their files,
ensuring that their work is securely preserved.
The requirement is specified by the template as follows:

FR1- All systems of the text editors product line shall provide the user with the ability to
save the file

The steps to structure FR1 using the tool of the SECRET template are:

1. Click on the Description field of the requirement’s properties

The text suggested corresponds to parts 1 & 2 of the template because the condition is not obligatory
in the requirements so it can be skipped to the system part directly by selecting “All, Some, Those”
which appears at the end of the dropdown list and in part 2 (gray) of the template.
Click directly on the word you want, do not type it.

<!-- Page 11 -->
After selecting (clicking on) your choice a placeholder will appear that corresponds to the
third section <Product line name> where you have to type in the name of the product line.
If the text suggested has <..> it is just a placeholder and you will need to type a value for it (in
the description text area)
2. The field will continue to suggest the next section of the SECRET template (triggered
by space).

<!-- Page 12 -->


<!-- Page 13 -->
3. Close the properties once you are done defining the requirement (you don’t need to
keep choosing options once you think your requirement is complete)

4. The description will appear in the graphical element of the requirement

FR9 - Auto-Save
To prevent data loss, all text editors will feature an auto-save functionality that periodically saves the
user's work.
The requirement structured with the template:
FR9- Those systems of the text editors product line that have the autosave feature shall autosave
the text eventually

The steps to structure FR9 using the tool of the SECRET template are:

1. Click on the Description field of the requirement’s properties and choose Those.

<!-- Page 14 -->
2. When the restriction part is reached, click on it and type the restriction after. The
“Restriction:” keyword will disappear later in the requirement.

<!-- Page 15 -->
3. Similarly, when the activity part is reached, choose a verb, where verb: will appear in the
sentence. Type the verb after it and it will later disappear.

<!-- Page 16 -->


<!-- Page 17 -->
4. After the object part, there are many suggestions (conditionality in object, object details,
validation criteria, and RELAX statement).

<!-- Page 18 -->
5. In this requirement, we have the “eventually” relax statement, which is found in the
suggested options.

6. The graphical FR9 will appear as follows

1.3.Addressing Non-Functional Requirements and Constraints
The non-functional requirements and constraints do not have the security criteria and security
mechanisms parts of the template since they are not concerned with the security aspects ( we have
implemented the security requirements separately)

<!-- Page 19 -->
NFR1 – External Interfaces
All text editors within our product line are designed to work seamlessly on multiple devices,
ensuring accessibility and flexibility if the text editors are to be portable. The requirement is
specified by the template as follows:
NFR1- If the text editors are to be portable, then all systems of the text editors product line
shall support a variety of devices.

To specify it, using VariaMos, complete the following steps.

1. Choose other non-functional requirement from the palette.

2. In the properties of the non-functional requirement, you have to choose the type of the
non-functional requirement, External Interfaces, in this case.

<!-- Page 20 -->
3. Proceed to the Description property and start writing the requirement

At this step you need to type in the condition “the text editors are to be portable”.

<!-- Page 21 -->


<!-- Page 22 -->


<!-- Page 23 -->
CR3 - Maximum File Size Limit (All Systems)
All systems within the diverse text editors product line shall assign a high priority to ensuring that
each file, regardless of variability in specific features, has a file size of a maximum of 100MB.
The requirement is specified by the template as follows:
CR3- All systems of the text editors product line shall have a file size of maximum 100MB.

To specify it, using VariaMos, complete the following steps.

1. Choose other non-functional requirement from the palette.

2. In the properties of the non-functional requirement, you have to choose the type of the
non-functional requirement, Constraint, in this case.

<!-- Page 24 -->
3. Proceed to the Description property and start writing the requirement

<!-- Page 25 -->
4. At this point, choose additionalDetails and “additionalDetails” will appear in the
sentence.

5. Type the details, “of maximum 100MB”, in this case. The keyword additionalDetails: will
disappear once you close the properties.

<!-- Page 26 -->
1.4.Addressing Security Requirements
Security requirements have the security criteria and security mechanisms parts of the template
since they are concerned with the security aspects.

SR1 - Confidentiality:
Certain text editors within the product line are required to maintain the confidentiality of text
through encryption methods compliant with ISO 27001:2022 standards, safeguarding sensitive
information from unauthorized access or disclosure. The requirement is specified by the
template as follows:

Some systems of the text editors product line shall ensure confidentiality of the text by
encryption complying with ISO 27001:2022 .

To specify it, using VariaMos, complete the following steps.

1. Drag and drop a security requirement from the left palette into the canvas and go to
properties

2. Click on the Description field of the requirement’s properties exactly as in the functional
requirement, and the parts of the template will be suggested. Once you reach the security
criteria part, a list of security criteria will be suggested. The source of this list is the
SCORE ontology that contains 30 security criteria and their relationships.

<!-- Page 27 -->


<!-- Page 28 -->


<!-- Page 29 -->
Figure 1 SCORE Ontology

<!-- Page 30 -->
3. Choose the security criteria and continue typing the requirement. All the optional parts
will be suggested. In this requirement, we are interested in the security mechanism.

<!-- Page 31 -->
4. Choose “by <Security Mechanism>”. It also calls the ontology to get the security
mechanisms associated with the previously defined security criterion. It is also possible
to define security mechanisms other than the ones suggested by typing any security
mechanism you want.

<!-- Page 32 -->
5. Type “encryption” for the security mechanism. The remaining options will be suggested.
In this case, we are interested in “complying with”.

<!-- Page 33 -->
6. Choose complying with the type in the validation criteria, ISO 27001:2022 in this case.

<!-- Page 34 -->
1.5.Defining relationships between the requirements
1. Define relationships between the requirements (click on the center of the requirement
shape and drag the arrow to the other requirement)

(To change the relationship type right-click on the arrow then choose properties)

The available relationships are the following:

<!-- Page 35 -->
Evolution traceability
● Rationalization links: represent the rationalization of objects or document the reasons for
evolutionary steps.
● Evolution links: document the input-output relationships of actions leading from one or
more existing objects to one or more new or modified objects.
Traceability of abstractions or details
● Refinement: becomes more specific in detail and is in fact more demanding than the initial
requirement.
● Generalization: becomes more general or abstract in detail, then is actually more
demanding than the original requirement might have been.
Traceability of dependencies
● Overlay: An overlay relationship can exist between: (i) a sequence of terms in a
requirement statement or part of a use case, and a class, attribute, association or end of
association in the analysis object model, or(ii) a sequence of terms in a requirement
statement and a sequence of terms in a part of a use case. The part of a use case that can be
linked by an overlay relationship can be its description, a precondition or postcondition of
it, its triggering event, or one of its normal or exceptional events. An overlay relation
indicates that the connected elements refer to a common feature of the underlying system
or its domain. Thus, a relationship of this type expresses the potential for dependency
between these elements.
● Dependency: helps manage dependencies between objects (usually at the same stage of
development), often imposed by a constraint (resource, skill, compatibility).
Traceability of benefits/solutions
● Contribution: Sometimes, the benefit of a requirement can only be realized if another
requirement is implemented first. For example, requirement A may be implemented, but
the benefit of this implementation may not be realized until requirement C is also
implemented. This relationship may seem similar to implementation dependency, but it's
not a question of whether A can be implemented, but rather whether the value of A can be
recognized.

<!-- Page 36 -->
● Operationalization: This is the relationship that refines the non-functional requirements
into solutions in the target system that satisfy the non-functional requirements.
Traceability of conflicts/interactions
● Conflicts: The specification, elaboration, decomposition, derivation and modification of
OBJECTIVES such as REQUIREMENTS, CONCEPTS, etc., is the process of creating a
system. GENERATES (or leads to) PROBLEMS or CONFLICTS, often due to different
interpretations, assumptions, interests, viewpoints, experiences and objectives of
stakeholders.
● Interactivity: Non-functional requirements in themselves do not interact, as they represent
static objectives to be achieved. However, their associations with functionalities can
interact, insofar as attempts to realize a non-functional requirement at a certain point of
association can hinder (negative interaction) or facilitate (positive interaction) the
realization of other non-functional requirements at the same point of association, for
example the safety and performance of control functionality

1.6.Adding related security requirements
As explained before, the security criteria part of the template is connected to an ontology that
contains 30 security criteria and their security mechanisms. The ontology also relates these security
criteria which makes it possible to suggest additional security requirements to improve the security
coverage of the system.
2. Add related security requirements (right-click on the security requirement and choose
related requirements)

<!-- Page 37 -->
3. Additional security requirements should appear connected to the one used to generate
them.

1.7.Generate the SRS/SyRS (Software/System Requirements Specification)
Right click on the Domain model then choose Generate SRS/SyRS from the tools.

<!-- Page 38 -->
The generated word file looks as following, with sections about to the project to be filled in and the
requirements automatically added in their corresponding sections, as in 3.1,3.2, 3.9, and 3.10

<!-- Page 39 -->
3. Proposed activity: Specifying Requirements for a Text Editor Product Line
In this activity you will specify the rest of the functional, non-functional requirement, security
requirements, and constraints of the text editors product line.

3.1.Functional Requirements:
FR1-Mandatory save file feature
(All systems of the text editors product line shall provide the user with the ability to save the file)
FR2-Mandatory open file feature
(All systems of the text editors product line shall provide the user with the ability to open a file)
FR3-Optional font feature
(Some systems of the text editors product line could provide the user with the ability to change the
font)
FR4-Optional font size feature (but requires font size feature)
(Some systems of the text editors product line could provide the user with the ability to change the
font size)
FR5-Optional bold font feature (but requires the font feature)
(Those systems of the text editors product line that include the font feature could provide the user with
the ability to apply the bold font)
FR6-Optional italics font feature (but requires the bold feature)
(Those systems of the text editors product line that include the bold font feature could provide the user
with the ability to apply the italic font)
FR7-Optional align feature (but requires the font feature)
(Those systems of the text editors product line that include the font feature could provide the user with
the ability to align the font)

FR8-All systems of the text editors product line shall spell-check all the typed text
FR9- Those text editors of the text editors product line that have the autosave feature shall autosave
the text eventually
FR10-All systems of the text editors product line shall provide the user with the ability to edit the text
FR11-All systems of the text editors product line shall provide the user with the ability to copy the text
FR12-All systems of the text editors product line shall provide the user with the ability to paste text
FR13-All systems of the text editors product line should provide the user with the ability to search the
text
FR14-Some systems of the text editors product line should provide the user with the ability to replace
the text
FR15-Some systems of the text editors product line could provide the user with the ability to export
the text
FR16-Some systems of the text editors product line could provide the user with the ability to import a
file
.
.
.
3.2. Complex constraints
CR1-If the family attribute is System then the family attribute shall not have the bold font
characteristic
CR2-If the family attribute is System then the align shall use the Centered alignment only
CR3-….
CR4-….
3.3. Quality Requirements:
NFR1- If the text editors are to be portable then all text editors of the text editors product line shall
support a variety of devices.
NFR3- All text editors of the text editors product line shall ensure the interface’s usability.

<!-- Page 40 -->
3.4.Security Requirements:
SR1- Some text editors of the text editors product line shall ensure confidentiality of the text by
encryption complying with ISO 27001:2022
SR2- Some text editors of the text editors product line shall ensure integrity of the text if and only if
the text is confidential.

● Create a new project and a text editor product line (Type software, domain software
and web services)
● Define the functional requirements
● Similarly, define the NFR
● Define the Security requirement
● Add or define the dependency between the requirements
● Add related security requirements by right-clicking on the security requirement, then
choosing related requirements
● Generate the SRS/SyRS (Software/System Requirements Specification) document
