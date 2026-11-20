<!-- Page 1 -->
Tutorial 1: Requirements Specification

Version 2.0. Last update: Nov 2024.

Table of Contents

Introduction 1
1. Description of the Text Editors Product Line 1
2. Project creation 4
3. Defining Domain Requirements 4
3.1. Creating a domain requirement model 4
3.3. Specifying Functional Requirements 5
3.4. Specifying Non-Functional Requirements and Constraints 7
Security Requirements 7
3.6. Defining relationships between the requirements 14
3.7. Automatically specify the sub-requirements of a security requirement 15
3.8. Generate the SRS/SyRS (Software/System Requirements Specification) 16
4. Proposed activity 17
4.1. Functional Requirements 17
4.2. Complex constraints 18
4.3. Quality Requirements 18
4.4. Security Requirements 18

Introduction
This tutorial aims to provide comprehensive guidance on specifying Domain Requirements in
VariaMos. In particular, it is designed to assist users in specifying functional, non-functional (e.g.,
security) requirements for product lines using a well-defined natural language structure or template.
Let’s see, as a practical example, how to specify the domain requirements of a text editors product
line.

Prerequisites:

● We recommend using Google Chrome (please install it if you don't already have it).
● Have access to the VariaMos platform (good internet connection required).
● Basic understanding of software development and variability specification.
● Tutorial 0 - Creating projects, product lines and products in VariaMos

1. Description of the Text Editors Product Line
Let's explore a hypothetical product line centered around a text editor. The product line encompasses a
collection of text editors, each offering unique features and capabilities while sharing a common core
functionality of text editing. This product line's primary objective is to provide a range of text editing
solutions that can be customized to suit individual preferences while ensuring a consistent user
experience.

<!-- Page 2 -->
Scope of the product line
This product line should be abla to configure and derivate at least the following products to be
cost-effective:
1. Simple Text Editor: This basic text editor is designed for simplicity and ease of use. It offers
essential functionality, including text creation, editing, copying, and pasting. Users can save
and open files effortlessly.

2. Advanced Text Editor: The advanced text editor caters to users who require additional
formatting options and features. It includes functionalities such as font selection, font size
adjustment, text styling (bold and italics), and alignment control.

3. Minimalist Text Editor: For users seeking a distraction-free text editing experience, the
minimalist text editor provides a clean and clutter-free interface with essential editing and
saving capabilities.

4. Collaborative Text Editor: This specialized text editor is built for collaborative work. It
enables real-time editing and collaboration among multiple users on the same document,
making it ideal for team projects and document review.

5. Secure Text Editor: Security-conscious users will appreciate the secure text editor, which
includes encryption features to ensure the confidentiality of sensitive documents. It also offers
password protection and secure file storage options.

The catalog of products corresponding to the scope of this product line is presented as follows:

Functional Requirements:
FR1 - Save File Feature: All systems of our product line shall provide users with the essential ability
to save their files, ensuring that their work is securely preserved.
FR2 - Open File Feature: In all systems of our product line, users can seamlessly open files within
the systems, allowing for easy access to their previous work.
FR3 - Font Feature: Some systems in our product line offer users the flexibility to customize the font
style to suit their preferences.
FR4 - Font Size Feature (requires Font Feature): In addition to font customization, certain systems
also enable users to adjust the font size, enhancing text readability.
FR5 - Bold Font Feature (requires Font Feature): For those systems that include font customization,
users can apply bold formatting to their text.
FR6 - Italics Font Feature (requires Bold Feature): Systems offering the bold font feature also allow
users to apply italics to their text for added emphasis.
FR7 - Align Feature (requires Font Feature): In systems with the font customization feature, users
have the capability to align their text as per their requirements.
FR8 - Spell-Check: All text editors across our product line will automatically perform spell-check on
typed text, ensuring accuracy and professionalism.
FR9 - Auto-Save: To prevent data loss, all text editors will feature an auto-save functionality that
periodically saves the user's work.
FR10 - Text Editing: Users can easily edit their text, providing a seamless writing and editing
experience.
FR11 - Copy Text: Our text editors enable users to copy text, facilitating the efficient transfer of
content.

<!-- Page 3 -->
FR12 - Paste Text: Users can paste text with ease, simplifying content importation.
FR13 - Search Text: All text editors provide users with a robust search function to locate specific
content within their documents.
FR14 - Replace Text: In some selected systems, users have the option to replace text, streamlining text
modification.
FR15 - Export Text: Certain text editors allow users to export their text, supporting compatibility with
other software and formats.
FR16 - Import Files: In some systems, users can import files into specific text editors, enabling
seamless integration of external content.
FR17 - Unsaved Changes Prompt: If the user attempts to close the text editor without saving changes
to an open file, then, regardless of variability in specific features across the diverse text editors within
our product line, all systems shall assign a high priority to the critical functionality of displaying a
prompt.
FR18 - Incompatible File Format Error: If the user attempts to open a file that is not in a compatible
text format, then, with consideration for variability in specific features, those systems within the
diverse text editors product line that include the "Rich Text Format (RTF)" feature shall impose a
restriction. This restriction prioritizes the critical activity of displaying an error message.
FR19 - Auto-Correct Suggestions: During the spell-check process, and with consideration for
variability in specific features, those systems within the diverse text editors product line that include
the auto-correct feature shall impose suggesting corrections.
FR20 - Universal Clipboard Integration: When a user performs a copy operation, all systems within
the diverse text editors product line shall assign a high priority to the critical functionality of storing
the copied text. This stored text shall be stored in the universal clipboard.
FR21 - Font Customization: In case the text font capacity is included, regardless of variability in
specific features, all systems within the diverse text editors product line shall prioritize the essential
functionality of providing the user with the ability to change the font style.
FR22 - Find and Replace Confirmation: In case the "Find and Replace" feature is included, and
considering variability in specific features, those systems within the diverse text editors product line
that support prompts shall prioritize the critical functionality of providing the user with the ability to
approve the changes.
FR23 - Export File Specification: Before initiating the export process, and with consideration for
variability in specific features, those systems within the diverse text editors product line that include
the export feature shall impose providing the user with the ability to specify the destination file as the
object.
FR28 - Dynamic Text Formatting: After the user pastes text into the document, regardless of
variability in specific features, all systems within the diverse text editors product line shall adjust the
text format.

Constraints:
CR1 - Font Attribute Constraints: If the font family attribute is set to "System," the bold font
characteristic cannot be applied.
CR2 - Align Attribute Constraints: When the font family attribute is set to "System," the align feature
can only be set to "Centered."
CR3 - Maximum File Size Limit: All systems within the diverse text editors product line shall assign
a high priority to ensuring that each file, regardless of variability in specific features, has a file size of
a maximum of 100MB.
CR4- Concurrent Open File Limit: All systems within the diverse text editors product line shall
restrict the concurrent open files activity. This constraint ensures that, regardless of variability in
specific features, each system shall restrict the number of concurrent open files to a maximum of five.

<!-- Page 4 -->
Quality Requirements:
NFR1 – External Interfaces: All text editors within our product line are designed to work seamlessly
on multiple devices, ensuring accessibility and flexibility if the text editors are to be portable.
NFR2 – Usability: Every text editor in the product line must guarantee user-friendly interfaces,
prioritizing ease of use and enhancing the overall user experience.

Security Requirements:
SR1 - Confidentiality: Certain text editors within the product line are required to maintain the
confidentiality of text through encryption methods compliant with ISO 27001:2022 standards,
safeguarding sensitive information from unauthorized access or disclosure.
SR2 – Integrity: Specific text editors of the product line must ensure the integrity of text content, but
only if the text is designated as confidential. This ensures that the information remains unchanged and
reliable, maintaining its trustworthiness and accuracy.

2. Project creation
Visit the VariaMos website https://app.variamos.com and create a project as described in the tutorial
Tutorial 0 - Creating projects, product lines and products in VariaMos, then complete the project
details:
Project name: Enter a name for your project, i.e. Editors.
Product line name: Enter a name for your product line name, i.e. Text editors.
Type: Choose either “Software” or “System” based on the nature of your applications. It is “Software”
in this case.
Domain: Select the domain corresponding to your product line. You can keep the domain as the
default value if you are unsure of the domain i.e. Education.

3. Defining Domain Requirements
3.1. Creating a domain requirement model
1. After successfully creating a project, navigate to the project workspace.

<!-- Page 5 -->
2. Left-click on Domain Engineering to create a new "Domain Requirements - AC model" (AC
stands for auto-complete since the language has an autocomplete service for the template).
This model will serve as the container for your requirements.

3.3. Specifying Functional Requirements
Let's start with our first functional requirement, FR1 - Save File Feature: All systems of our product
line shall provide users with the essential ability to save their files, ensuring that their work is securely
preserved. The description of this requirement respects the structure of the template used in VariaMos,
so it should be written as it is.
1. Drag a “FunctionalRequirement” from the palette and drop it on the working area.

2. Define the properties of the requirement as follows:
● Identifier: A unique identifier for the requirement.
● Version: The current version of the requirement (to track its evolution).
● DateCreated: The date when the requirement was first created.
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

<!-- Page 6 -->
● Constraints: Constraints that affect the lifecycle of the system(s) of interest, such as cost,
schedule, and legal and operational aspects.
● Rationale: The justification for establishing each requirement must be captured. The
rationale provides the reason why the requirement is necessary and refers to any analysis,
business study, modeling, simulation, or other substantial objective evidence.
● Applicability: Whether the requirement is applicable in reality or not.
● ComponentName: The name of the component related to the requirement (if already
known).
● Description: The text of the requirement (th structure corresponds to the SECRET
template discussed below)

3. Define the requirement description with the help of the SECRET template auto-completion
tool. The requirement description is specified by the SECRET template as follows: <all, some,
those> systems of the <software product line name> <shall, could, should, will> provide
<who?> with the ability to <verb> <object>. i.e.: All systems of the text editors product line
shall provide the user with the ability to save the file. For more details see Appendix 1 -
Requirements Specification in VariaMos with SECRET.docx

<!-- Page 7 -->
4. Close the properties as soon as you have finished defining the requirement. The description
will appear in the graphical element of the requirement.

Repeat the process for all functional requirements.

3.4. Specifying Non-Functional Requirements and Constraints
Security Requirements
Security requirements have the security criteria and security mechanisms parts of the template since
they are concerned with the security aspects.

SR1 - Confidentiality: Certain text editors within the product line are required to maintain the
confidentiality of text through encryption methods compliant with ISO 27001:2022 standards,
safeguarding sensitive information from unauthorized access or disclosure.
Following the template that VariaMos uses to structure requirements, this prosaic description should
look like this: “Some systems of the text editors product line shall ensure confidentiality of the text by
encryption complying with ISO 27001:2022.”

<!-- Page 8 -->
To specify it, using VariaMos, complete the following steps.

1. Drag and drop a security requirement from the left palette into the canvas and go to properties.

2. Click on the Description field of the requirement’s properties exactly as in the functional
requirement, and the parts of the template will be suggested. Once you reach the security
criteria part, a list of security criteria will be suggested. The source of this list is the SCORE
ontology that contains 30 security criteria and their relationships.

<!-- Page 9 -->
3. Close the properties once you are done defining the requirement (you don’t need to keep
choosing options once you think your requirement is complete). The description will appear in
the graphical element of the requirement.

Repeat the process for all security requirements.
Other non-functional requirements
NFR1 – External Interfaces: All text editors within our product line are designed to work seamlessly
on multiple devices, ensuring accessibility and flexibility if the text editors are to be portable.
Following the template that VariaMos uses to structure requirements, this prosaic description should
look like this: “If the text editors are to be portable, then all systems of the text editors product line
shall support a variety of devices”.
To specify it, using VariaMos, complete the following steps.
1. Choose other non-functional requirement from the palette.

<!-- Page 10 -->
2. In the properties of the non-functional requirement, you have to choose the type of the
non-functional requirement, External Interfaces, in this case.

3. Proceed to the Description property and start writing the requirement.

<!-- Page 11 -->
4. Close the properties window as soon as you have finished defining them. Some of these
properties will appear in the corresponding requirement, on the working area.

Constraints
CR3 - Maximum File Size Limit: All systems within the diverse text editors product line shall assign a
high priority to ensuring that each file, regardless of variability in specific features, has a file size of a
maximum of 100MB.
Following the template that VariaMos uses to structure requirements, this prosaic description should
look like this: “All systems of the text editors product line shall have a file size of maximum 100MB”.
To specify it, using VariaMos, complete the following steps.

1. Choose other non-functional requirement from the palette.

<!-- Page 12 -->
2. In the properties of the non-functional requirement, you have to choose the type of the
non-functional requirement, Constraint, in this case.

3. Proceed to the Description property and start writing the requirement.

<!-- Page 13 -->
4. At this point, choose additionalDetails and “additionalDetails” will appear in the sentence.

5. Type the details, “of maximum 100MB”, in this case. The keyword additionalDetails: will
disappear once you close the properties.

<!-- Page 14 -->
6. Close the properties once you are done defining the requirement (you don’t need to keep
choosing options once you think your requirement is complete). The description will appear in
the graphical element of the requirement.

Repeat the process for the rest of non-functional requirements.
3.6. Defining relationships between the requirements
The relationships between requirements help capture dependencies, refinements, and interactions,
ensuring a well-documented evolution of the project. Here is a overview of these requirement
relationships:
● Rationalization: represent the rationalization of objects or document the reasons for
evolutionary steps.
● Evolution: document the input-output relationships of actions leading from one or more
existing objects to one or more new or modified objects.
● Refinement: becomes more specific in detail and is in fact more demanding than the initial
requirement.
● Generalization: becomes more general or abstract in detail, then is actually more demanding
than the original requirement might have been.
● Overlay: An overlay relationship can exist between: (i) a sequence of terms in a requirement
statement or part of a use case, and a class, attribute, association or end of association in the
analysis object model, or(ii) a sequence of terms in a requirement statement and a sequence of
terms in a part of a use case.
● Dependency: helps manage dependencies between objects (usually at the same stage of
development), often imposed by a constraint (resource, skill, compatibility).
● Contribution: Sometimes, the benefit of a requirement can only be realized if another
requirement is implemented first.
● Operationalization: This is the relationship that refines the non-functional requirements into
solutions in the target system that satisfy the non-functional requirements.
● Conflicts: The specification, elaboration, decomposition, derivation and modification of
objectives such as requirements, concepts, etc., is the process of creating a system. Generates
(or leads to) problems or conflicts, often due to different interpretations, assumptions,
interests, viewpoints, experiences and objectives of stakeholders.
● Interactivity: Non-functional requirements in themselves do not interact, as they represent
static objectives to be achieved.
For more details see Tutorial 0 - Creating projects, product lines and products in VariaMos

1. Define relationships between the requirements (click on the center of the requirement shape
and drag the arrow to the other requirement).

<!-- Page 15 -->
2. To change the relationship type, right-click on the arrow then choose an option.

3.7. Automatically specify the sub-requirements of a security requirement
As explained before, the security criteria part of the template is connected to an ontology that contains
30 security criteria and their security mechanisms. The ontology also relates these security criteria
which makes it possible to suggest additional security requirements to expand the security coverage of
the system. Consult the Appendix 1 for more details about it:
Appendix 1 - Requirements Specification in VariaMos with SECRET.docx
1. Expand a security requirement with its sub-security requirements (right-click on the security
requirement and choose “Related requirements”).

<!-- Page 16 -->
2. Additional security requirements should appear connected to the one used to generate them.

3.8. Generate the SRS/SyRS (Software/System Requirements Specification)

1. Right click on the Domain Requirement-AC model then choose Generate SRS/SyRS from the
tools.

<!-- Page 17 -->
2. The generated Word file will look like this, with sections about the project to be filled in and
the requirements automatically added to the appropriate sections.

4. Proposed activity
In this activity, you will specify the remaining functional and non-functional requirements, security
requirements and constraints for the text editor product line. The following is a proposal of how each
of them could be written using the VariaMos natural language requirements structure template.
4.1. Functional Requirements
FR1 - Save file feature: “All systems of the text editors product line shall provide the user with the
ability to save the file”. It is a mandatory requirement.
FR2 - Open file feature: “All systems of the text editors product line shall provide the user with the
ability to open a file”. It is a mandatory requirement.
FR3 - Font feature: “Some systems of the text editors product line could provide the user with the
ability to change the font”. It is an optional requirement.
FR4 - Font size feature (requires the Font feature): “Some systems of the text editors product line
could provide the user with the ability to change the font size”. It is an optional requirement.
FR5 - Bold font feature: “Those systems of the text editors product line that include the font feature
could provide the user with the ability to apply the bold font”. It is an optional requirement.
FR6 - Italics font feature (requires the Font feature): “Those systems of the text editors product line
that include the bold font feature could provide the user with the ability to apply the italic font”. It is
an optional requirement.
FR7 - Align feature (requires the Font feature): “Those systems of the text editors product line that
include the font feature could provide the user with the ability to align the font”. It is an optional
requirement.

<!-- Page 18 -->
FR8 - Spell-check feature: All systems of the text editors product line shall spell-check all the typed
text
FR9 - Autosave: Those text editors of the text editors product line that have the autosave feature shall
autosave the text eventually
FR10 - Edit text: All systems of the text editors product line shall provide the user with the ability to
edit the text
FR11 - Copy text feature: All systems of the text editors product line shall provide the user with the
ability to copy the text
FR12 - Paste text feature: All systems of the text editors product line shall provide the user with the
ability to paste text
FR13 - Search text feature:All systems of the text editors product line should provide the user with
the ability to search the text
FR14 - Replace text feature: Some systems of the text editors product line should provide the user
with the ability to replace the text
FR15 - Export text feature: Some systems of the text editors product line could provide the user with
the ability to export the text
FR16 - Import file feature: Some systems of the text editors product line could provide the user with
the ability to import a file

4.2. Complex constraints
CR1 - Bold font constraint: If the family attribute is System then the family attribute shall not have
the bold font characteristic
CR2 - Align constraint: If the family attribute is System then the align shall use the Centered
alignment only

4.3. Quality Requirements
NFR1 - Portability: If the text editors are to be portable then all text editors of the text editors product
line shall support a variety of devices.
NFR2 - Usability: All text editors of the text editors product line shall ensure the interface’s usability.
4.4. Security Requirements
SR1 - Confidentiality: Some text editors of the text editors product line shall ensure confidentiality
of the text by encryption complying with ISO 27001:2022
SR2 - Integrity: Some text editors of the text editors product line shall ensure integrity of the text if
and only if the text is confidential.
