<!-- Page 1 -->
Tutorial 0: Creating projects, product lines and products in
VariaMos

Version 1.0. Last update: Nov 2024.

Table of Contents

Introduction 2
1. Project management 2
1.1. Login 2
1.2. Project creation 2
1.3. Open project 3
1.4. Save project 3
1.5. Save project as 4
1.6. Download project 5
2. Workspace 5
2.1. Tree explorer 5
2.1.1. Add new product line 5
2.1.2. Edit the properties of a product line 6
2.1.3. Rename a product line 7
2.1.4. Delete a product line 7
2.1.5. Create a new application (a new product of the product line) 8
2.1.6. Create an adaptation 8
2.1.7. Create domain engineering models 9
2.1.8. Create application engineering models 9
2.1.9. Create adaptation models 10
2.1.10. Rename models 11
2.1.11. Delete models 11
2.1.12. Edit models 12
2.2. Diagram editor 12
2.2.1. Add elements 12
2.2.2. Add relationships 13
2.2.3. Edit elements and relationships properties 14
2.2.4. Delete elements and relationships 14

<!-- Page 2 -->
Introduction
This tutorial aims to explain how to create software product line projects using VariaMos (an open-source,
collaborative and extensible Web tool to create engineering languages for engineering (dynamic) product lines
and self-adaptive systems) and to help users become familiar with its modeling environment.

Prerequisites:

● The use of Google Chrome is recommended (please install it if you don't have it)..
● Have access to the VariaMos platform (good internet connection required).
● Basic understanding of software development and variability modeling.

1. Project management

1.1. Login
For the log in:
1. Explore the VariaMos framework at https://app.variamos.com
2. Select Continue as a Guest if you don't want to create an account, or Sign in with Google if you want a
more personalized experience (use this option to take advantage of the full capabilities of the system
such as saving your projects).

1.2. Project creation
To create a new project:

1. Select the New project option in the taskbar.
2. In the Project name field enter the name of your project, i.e: Editors.
3. In the Product line name field enter the name of the first product line of the project, i.e: Text editors.
4. In the Type field select either Software or System based on the nature of your product line. The
difference between the two lies mainly in the type of templates that will be used to specify the
requirements, for example, software projects will have certain requirements that systems projects will
not have, such as logical database requirements, while systems projects' requirements specification
documents will have certain requirements that do not take place in software projects, such as
requirements on physical characteristics and requirements related to system lifecycle sustainment. For a
project of software editors, let’s choose Software.
5. In the Domain field select the domain corresponding to your product line. You can keep the domain as
the default value if you are not sure of the domain.
6. Click on the Create button.

<!-- Page 3 -->
1.3. Open project
To open an existing project:

1. Select the Open project option in the taskbar.
2. Then, select your personal project, a public project or import a new one from a JSON file.

1.4. Save project
To save the project changes:

1. Select the Save project option in the taskbar.
2. If you want to overwrite a project, select it from the list of projects.
3. If you want to save it as a new project, change its name.
4. If you want your project to be used as a template, so that other users can use it as a basis for their own
work, select the Public option.
5. Click on the Save button.

<!-- Page 4 -->
Notes:
● If the user is logged in as a guest, they will only be able to download the project as a JSON file.
● You will need to save your work frequently as this version of VariaMos does not have autosave.

1.5. Save project as
If you want save a copy of you project:

1. Select the Save project as … option in the taskbar.
2. If you want to overwrite a project, select it from the list of projects.
3. If you want to save a copy, change the name of the project.
4. If you want your project to be used as a template, so that other users can copy it as a basis for their own
work, select the Template option.
5. Click on the Save button.

Notes:

<!-- Page 5 -->
● If the user is logged in as a guest, they will only be able to download the project as a JSON file.
● You will need to save your work frequently as this version of VariaMos does not have autosave.

1.6. Download project
To download you project as a JSON file:

1. Select the Download project option in the taskbar.
2. Then select the download location.
3. Click on the Save button.

2. Workspace
When you create your project, you will see the name of your project and the name of your product line on the
left-hand side. You will also notice that there is a section corresponding to Domain Engineering and another
section corresponding to Application Engineering (the two main processes of Product Line Engineering).

2.1. Tree explorer
Using the tree explorer you can display the content of all the product lines (in this case we only have one: Text
editors) that you have in your project (Editors).

2.1.1. Add new product line
To add a new product line to the project:
1. Right-click on the project’s name (or in the name of one of the product lines that you already have in
the project).
2. Select the New product line option.

<!-- Page 6 -->
3. Set the product line name in the dialog box.
4. Click on the Accept button.

2.1.2. Edit the properties of a product line
To change the properties of a product line:
1. Right-click on the name of the product line whose properties you want to change.
2. Select the Properties option.

3. Set/change the product line properties in the dialog box
4. Click on the Accept button.

<!-- Page 7 -->
2.1.3. Rename a product line
To rename a product line:
1. Right-click on the product line you want to rename.
2. Select the Rename option.

3. Set the product line name in the dialog box.
4. Click on the Accept button.

2.1.4. Delete a product line
To delete a product line from your project:
1. Right click on the product line you want to delete.
2. Select the Delete option.

3. Click on the Accept button.

<!-- Page 8 -->
2.1.5. Create a new application (a new product of the product line)
A product line is not just a product, system or application, but a family of them. For each new member of the
family, a new Application must be created to carry out in that space the whole process of configuration,
customisation and derivation of each new product. To create a new application of the product line:
1. Right-click on Application engineering in your product line.
2. Select the New application option.

3. Set the application name in the dialog box.
4. Click on the Accept button.

2.1.6. Create an adaptation
The same system can have several contexts of adaptation, for example, an object gathering robot can be
designed to adapt correctly to the particular and changing conditions of a beach but also to those of the streets of
a city and even to other less known but predictable conditions such as those of Mars. Each ‘Adaptation’ will
allow us to define not only the scope of each adaptive context for which the robot will be designed, but also all
the associated engineering (e.g., dynamic reconfiguration and rederivation processes). To create an adaptation
space for an application:
1. Right-click on the application’s name of your product line.
2. Select the New adaptation option.

3. Set the adaptation name in the dialog box.

<!-- Page 9 -->
4. Click on the Accept button.

2.1.7. Create domain engineering models
To create domain models in the product line:
1. Right-click on Domain engineering in your product line.
2. Select the New model option.
3. Select the model that you want.

4. Set the model name in the dialog box
5. Click on the Accept button.

2.1.8. Create application engineering models
To create domain models in the product line:
1. Right-click on the application (for which you want to create a model) in your product line.
2. Select the New model option.
3. Select the model that you want.

<!-- Page 10 -->
4. Set the model name in the dialog box
5. Click on the Accept button.

2.1.9. Create adaptation models
To create adaptation models in the application:
1. Right-click on the adaptation (for which you want to create a model) in your application.
2. Select the New model option.
3. Select the model that you want.

4. Set the model name in the dialog box
5. Click on the Accept button.

<!-- Page 11 -->
2.1.10. Rename models
To rename models in the product line:
1. Right-click on the appropriate model.
2. Select the Rename option.

3. Set the model name in the dialog box
4. Click on the Accept button.

2.1.11. Delete models
To delete models from your project:
1. Right-click on the appropriate model.
2. Select the Delete option.

3. Click on the Accept button.

<!-- Page 12 -->
2.1.12. Edit models
To edit models of your project:
1. Left-click on the model you want to work on.

2. Edit the model in the diagram editor.

2.2. Diagram editor
When you select the model, you can edit it draggin elements from the palette in the right side to the edition area
in the center.

2.2.1. Add elements
To add elements to a model:
1. Drag an element from palette to edition area.

<!-- Page 13 -->
2. Set the properties in the dialog box
3. Click on the Close button.

2.2.2. Add relationships
To create relationships between the elements of a model:
1. Left-click on the first element of the relationship (if there is a precedence order, such as a “requires” or
a “father-child” relationship, or on any element if there is no order, such as an “excludes” relationship).
2. Drag the button over the second element and release it.

<!-- Page 14 -->
3. Set the properties in the dialog box
4. Click on the Close button.

2.2.3. Edit elements and relationships properties
To change properties of elements and relationships:
1. Right-click on the appropriate element or relationship.
2. Select the Properties option.

3. Set the properties in the dialog box
4. Click on the Accept button.

2.2.4. Delete elements and relationships
To delete elements and relationships from your project:
1. Right-click on the appropriate element or relationship.
2. Select the Delete option.

3. Click on the Accept button.

<!-- Page 15 -->
Alternatively, you can also delete elements and relationships as follows:
1. Left-click on the appropriate element or relationship.
2. Press the Delete key on the keyboard.

3. Click on the Accept button.
