<!-- Page 1 -->
Tutorial 2: Domain requirements variability modeling in
VariaMos

Version 2.0. Last update: Nov 2024.

Table of Contents

Introduction 1
1. Description of a Text Editor Product Line 1
2. Project creation 3
3. Representing the variability of the text editors' domain requirements as a Feature model 4
3.1 Features model creation 4
3.2. Features model edition 5
3.3. Creation of features 5
3.4. Relationships between features 6
3.5. Creating attributes 9
3.6. Final feature model 10
4. Proposed activity 11

Introduction
In this tutorial, we will intricately model the variability inherent in the domain requirements of a text
editor product line. This will be achieved with an extended feature modeling language (i.e., enriched
with attributes and cardinalities). This comprehensive approach will not only enable a nuanced
representation of diverse features but also facilitate a detailed exploration of their variations and
dependencies.

Prerequisites:

● The use of Google Chrome is recommended (please install it if you don't have it).
● Have access to the VariaMos platform (good internet connection required)
https://app.variamos.com.
● Basic understanding of software development and variability modeling.
● Tutorial 0 - Creating projects, product lines and products in VariaMos

1. Description of a Text Editor Product Line
The product line encompasses a collection of text editors, each offering unique features and
capabilities while sharing a common core functionality of text editing. This product line's primary
objective is to provide a range of text editing solutions that can be customized to suit individual
preferences while ensuring a consistent user experience.
Functional Requirements:

<!-- Page 2 -->
As an illustrative example, let’s consider the domain requirements associated with a product line of
text editors:

FR-1: All systems of the text editor product line shall support file formats.

FR-2: Those systems of the text editor product line that include the File format feature must provide
the user with the ability to choose between 1 and 2 file formats.

FR-3: Those systems of the text editor product line that include the File format feature could provide
the user with the ability to process Txt files.

FR-4: Those systems of the text editor product line that include the File format feature could provide
the user with the ability to process Rtf files.

FR-5: All systems of the text editor product line shall provide the user with the ability to open text
files.

FR-6: All systems of the text editor product line shall provide the user with the ability to save text
files.

FR-7: All systems of the text editor product line shall provide the user with the ability to select text.

FR-8: All systems of the text editor product line shall provide the user with the ability to copy text.

FR-9: All systems of the text editor product line shall provide the user with the ability to paste text.

FR-10: All systems of the text editor product line shall provide the user with the ability to cut text.

FR-11: All systems of the text editor product line shall provide the user with the ability to find text.

FR-12: All systems of the text editor product line shall provide the user with the ability to replace
text.

FR-13: Some systems of the text editor product line shall provide the user with the ability to zoom in
on the text.

FR-14: Some systems of the text editor product line shall provide the user with the ability to create
lists.

FR-15: Those systems of the text editor product line that include the List feature must provide the
user with the ability to choose between 1 and 3 list types: Alphabetic, Numeric, and Vignette.

FR-16: Those systems of the text editor product line that include the List feature could provide the
user with the ability to create alphabetic lists.

FR-17: Those systems of the text editor product line that include the Alphabetic list feature must
provide the user with the ability to choose between 1 and 2 types: Upper case and Lower case.

FR-18: Those systems of the text editor product line that include the List feature could provide the
user with the ability to create numeric lists.

FR-19: Those systems of the text editor product line that include the Numeric list feature must
provide the user with the ability to choose between 1 and 2 types: Roman and Arabic.

FR-20: Those systems of the text editor product line that include the List feature could provide the
user with the ability to create vignette lists.

<!-- Page 3 -->
FR-21: Those systems of the text editor product line that include the Vignette list feature must provide
the user with the ability to choose between 1 and 4 types: Dot, Diamond, Arrow, and Star.

FR-22: Some systems of the text editor product line shall provide the user with the ability to align the
text.

FR-23: Those systems of the text editor product line that include the Text alignment feature must
provide the user with the ability to choose between 1 and 4 alignment types: Left, Right, Center,
Justify.

FR-24: Some systems of the text editor product line shall provide the user with the ability to add
images.

FR-25: Some systems of the text editor product line shall provide the user with the ability to change
the font.

FR-26: Those systems of the text editor product line that include the Font feature could provide the
user with the ability to change the font family.

FR-27: Those systems of the text editor product line that include the Font family feature must provide
the user with the ability to choose between 1 and 4 family types: Arial, Calibrí, Times New Roman,
and Tahoma.

FR-28: Those systems of the text editor product line that include the Font feature could provide the
user with the ability to change the font style.

FR-29: Those systems of the text editor product line that include the Font style feature must provide
the user with the ability to choose between 1 and 7 family types: Regular, Bold, Italic, Underline,
Strikethrough, Superscript, and Subscript.

FR-30: Those systems of the text editor product line that include the font feature could provide the
user with the ability to change the font color.

FR-31: Those systems of the text editor product line that include the font feature must provide the
user with the ability to change the font size.

What about non-functional requirements? Have you forgotten them?

Well, let’s remember that the features are boolean in nature since they represent functional
requirements, and that the non-functional requirements are of a more diverse nature since they
sometimes represent attributes of the functional requirements (e.g. version, latency, endurance and
order of magnitude), others represent the different levels of quality that a product (or a family of
products) can have as for example safety or energy efficiency that can be characterized by 5 values
(from the lowest --, to the highest ++), sometimes they represent constraints that the products or
components must respect (e.g. price, provenance or quantity of cotton), sometimes they represent
constraints that the products or components must respect (e.g. price, provenance or quantity of
cotton), sometimes they represent the quality of a product (or a family of products) that can be
characterized by 5 values (going from the lowest --, to the highest ++), and sometimes they represent
constraints that the products or components must respect (e.g. price, provenance or quantity of
cotton), price, origin or quantity of a compound).

2. Project creation
If you did the tutorial Tutorial 1 - Requirements Specification in VariaMos.docx you can skip this step
and continue with the same project; otherwise, visit the VariaMos website https://app.variamos.com

<!-- Page 4 -->
and create a project, with the following project details, as described in the tutorial Tutorial 0 -
Creating projects, product lines and products in VariaMos
Project name: Enter a name for your project, i.e. Editors.
Product line name: Enter a name for your product line name, i.e. Text editors.
Type: Choose either "Software" or "System" based on the nature of your application. It is “Software”
in this case.
Domain: Select the domain corresponding to your product line. You can keep the domain as the
default value if you are unsure of the domain i.e. Education.

3. Representing the variability of the text editor's domain requirements as a Feature
model
To model the variability of the requirements, we will use the Features with attributes language.

3.1 Features model creation

To create the features model for the requirements:

1. Right-click on the Domain engineering item in the explorer panel, in the New model menu,
select Feature model with attributes.

<!-- Page 5 -->
2. Then, you can change the name of the feature model you are creating, and then click on the
Accept button.

3.2. Features model edition

To edit the feature model, select it in the left panel.

3.3. Creation of features

To add the features corresponding to requirements:
1. Drag and drop a Root feature element from the right panel or palette to the diagram editor.

2. Double-click on the RootFeature to name the product line, i.e., Text editor.

<!-- Page 6 -->
3. For each functional requirement, drag and drop a Concrete feature and change its name to a
descriptive name of the requirement. For example, Save file is the feature corresponding to the
FR-6 requirement.

3.4. Relationships between features

If all systems of the product line must have the requirement (e.g., Save file feature), press the left click
over the parent feature and release it over the child feature (Save file) to create a mandatory
relationship between them.

If only some products of the product line have the requirement, proceed as above and change the type
of the relationship by clicking on it and selecting the Optional option. For example, let’s define an
Optional relationship between the Text editor and the Zoom features.

<!-- Page 7 -->
1. Press the left click over the root feature and release it over the requirement to create a
relationship between them.
2. Double-click the relationship.
3. Select the Optional type.
4. Click on the Close button.

So the relationship changes its style.

If a requirement requires another requirement, for example, Images requires Rtf format, let’s proceed
as follows:
1. Press the left click over the Images feature and release over the Rtf format feature to create a
relationship between them.
2. Double-click on the relationship.
3. Select Includes type.
4. Click on the Close button.

<!-- Page 8 -->
Thus, the relationship changes its style.

If a requirement allows selecting other requirements that depend on it, for example, the requirement to
create lists (FR-15) allows selecting between 1 and 3 types of lists: alphabetical (FR-16), numerical
(FR-17), and vignette (FR-18).
1. Drag and drop a Bundle element to the diagram.

2. In the modal dialog, set Range in the Type field.
3. Set 1 in the RangeMin field.
4. Set 3 in the RangeMax field.
5. Click on the Close button.

<!-- Page 9 -->
6. Left-click on the parent feature and release it on the bundle to create a relationship between
them.
7. Then, create a relationship from the bundle to each child feature, pressing the left click on the
bundle and releasing it on each child feature.

3.5. Creating attributes

If a feature has attributes characterizing it, for example, feature Text alignment corresponding to the
FR-23 requirement needs the Align attribute to indicate which types of alignments are available for
the editors of the product line (i.e., Left, Right, Center and Justify).
1. Double-click on the Text alignment feature.
2. Click on the plus icon and set the name of the attribute, in this case, Align.

<!-- Page 10 -->
3. Select the domain of values that can accept the attribute; in this case, the values will be
characters, and therefore, we should select String.
4. List the possible values separated bya comma. In our case, Align cannot take any string of
characters; therefore, we must list the possible values that the attribute can take in each
configuration of a text editor.
5. Define the configuration restrictions. For example, we can indicate the range [1..4] to mean
that each text editor of the product line could have between 1 and 4 options of the list of
values.
6. Click on the Accept button.

3.6. Final feature model

Please continue representing the variability of the text editor's product line requirements on the feature
model at hand until you reach a model like the one shown below. Then, save your project as a local
file that will be used in the upcoming labs.

<!-- Page 11 -->
4. Proposed activity
ClothingStores is a software product line (SPL) that consists of the development of an e-commerce
store system family to manage and sell clothes. The main idea is to provide a set of capabilities, such
as product management, user management, shop system, cart system, web management, sharing
system, login system, database management, offline payment, and comment system, among others.
The implementation of these features will allow the development of several customized clothing store
products.

The ClothingStores SPL was designed as a real-world example, covering most of the concerns that
SPL developers face when implementing an SPL. These problems include:

· Crosscutting concerns. ClothingStores will contain a Login component, which, in case of
being part of a final product, must be integrated transversally over multiple other product
files.

· Fine-grained extensions. ClothingStores will present multiple fine-grained extensions that
must be applied to most of the derived products. For example, to modify the header menu, to
modify specific parts of the product views, to modify product class methods, SQL files,
among others.

· Coarse-grained extensions. There are many cases in which a ClothingStores product will
require coarse-grained extensions, such as replacing a validation method for the admin classes
and including DAO methods, among others.

<!-- Page 12 -->
· Product customization. Database config vars, product name, and some default texts inside
the product views must be customized.

· Managing multiple language files. The ClothingStores SPL will be designed as a real web
application that includes domain file types, such as SQL, images (.jpg and .png), JavaScript,
HTML, JSP, Java, and CSS.

Please create the following feature model in VariaMos and complete it with the corresponding
attributes needed to represent some quality requirements, in addition to new features and
relationships that you can identify in the online clothing store domain. Then save your project as a
local file that will be used in the following labs.

ClothingStores list of features

ID Feature Identifier Description Parent
F01 ClothingStores The root or name of the PL
F02 Basic views Refers to the basic views that any ClothingStores F01
product must contain (e.g., headers, footers, home
section, and CSS styles)
F03 Contact us A website section that contains the store contact F01
information (e.g., phone number, address, and email)
F04 Shipping A website section that contains store shipping F01
information
F05 Database Manages the communication with the database (in this F01
management case, MySQL)
F06 Demo data Provides sample SQL data (e.g., products, users, and F01
comments)

<!-- Page 13 -->
F07 Product Groups the product functionalities F01
F08 Product model Provides a service to store product information, F07
attributes, and operations
F09 List of products Represents a display service of all products in the store F07

F10 Comments Provides a mechanism to comment on products F07
F11 Sharing system Provides a mechanism to share products on Facebook F07
and Twitter
F12 Rating Provides a mechanism to rate products F07
F13 User Groups the user functionalities F01
F14 User model Provides a service to store user information, attributes, F13
and operations
F15 Account Represents a display service of the user information F13
(e.g., user name, user type, user identifier)
F16 Login Provides a mechanism to connect and disconnect from F13
the application
F17 Shop Groups the shop functionalities F01
F18 Cart Provides a mechanism to add products to the user cart, F17
and display and remove the products added to the cart

F19 Online payment Allows payment through PayPal F17
F20 Offline payment Allows offline payment by providing bank account F17
information
F21 Web management Groups the web management functionalities F01
F22 Basic views Refers to the basic views that the web management F21
module contains (e.g., header and home section)
F23 Product management Allows products to be managed, such as creating F21
products, editing products, listing products, and
deleting products.
F24 User management Allows users to be managed, such as creating users, F21
editing users, listing users, and deleting users.
F25 Comment Allows comments to be managed, such as creating F21
management comments, editing comments, listing comments, and
deleting comments.
