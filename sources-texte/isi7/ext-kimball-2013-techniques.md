<!-- Source externe (hors supports du cours ISI7), ajoutée le 2026-11-14 (docs/06 §9.6).
Référence : Kimball Group, « Kimball Dimensional Modeling Techniques », tiré de The Data Warehouse Toolkit, 3rd ed. (R. Kimball, M. Ross, 2013). © Kimball Group.
URL : https://www.kimballgroup.com/wp-content/uploads/2013/08/2013.09-Kimball-Dimensional-Modeling-Techniques11.pdf — consulté le 2026-11-14. Extraits copiés tels quels (pdftotext). -->

# Kimball Dimensional Modeling Techniques — extraits

## Fundamental concepts

Gather Business Requirements and Data Realities
  Before launching a dimensional modeling effort, the team needs to understand the needs of the
  business, as well as the realities of the underlying source data. You uncover the requirements via
  sessions with business representatives to understand their objectives based on key performance
  indicators, compelling business issues, decision-making processes, and supporting analytic needs. At
  the same time, data realities are uncovered by meeting with source system experts and doing high-level
  data proﬁling to assess data feasibilities.

  Collaborative Dimensional Modeling Workshops
  Dimensional models should be designed in collaboration with subject matter experts and data
  governance representatives from the business. The data modeler is in charge, but the model should
  unfold via a series of highly interactive workshops with business representatives. These workshops
  provide another opportunity to ﬂesh out the requirements with the business. Dimensional models should
  not be designed in isolation by folks who don’t fully understand the business and their needs;
  collaboration is critical!

  Four-Step Dimensional Design Process
  The four key decisions made during the design of a dimensional model include:
           1. Select the business process.
           2. Declare the grain.
           3. Identify the dimensions.
           4. Identify the facts
  The answers to these questions are determined by considering the needs of the business along with the
  realities of the underlying source data during the collaborative modeling sessions. Following the
  business process, grain, dimension, and fact declarations, the design team determines the table and
  column names, sample domain values, and business rules. Business data governance representatives
  must participate in this detailed design activity to ensure business buy-in.

  Business Processes
  Business processes are the operational activities performed by your organization, such as taking an
  order, processing an insurance claim, registering students for a class, or snapshotting every account
  each month. Business process events generate or capture performance metrics that translate into facts
  in a fact table. Most fact tables focus on the results of a single business process. Choosing the process
  is important because it deﬁnes a speciﬁc design target and allows the grain, dimensions, and facts to be
  declared. Each business process corresponds to a row in the enterprise data warehouse bus matrix.




© Kimball Group. All rights reserved.                                   Kimball Dimensional Modeling Techniques 1
  Grain
  Declaring the grain is the pivotal step in a dimensional design. The grain establishes exactly what a
  single fact table row represents. The grain declaration becomes a binding contract on the design. The
  grain must be declared before choosing dimensions or facts because every candidate dimension or fact
  must be consistent with the grain. This consistency enforces a uniformity on all dimensional designs that
  is critical to BI application performance and ease of use. Atomic grain refers to the lowest level at which
  data is captured by a given business process. We strongly encourage you to start by focusing on atomic-
  grained data because it withstands the assault of unpredictable user queries; rolled-up summary grains
  are important for performance tuning, but they pre-suppose the business’s common questions. Each
  proposed fact table grain results in a separate physical table; different grains must not be mixed in the
  same fact table.

  Dimensions for Descriptive Context
  Dimensions provide the “who, what, where, when, why, and how” context surrounding a business
  process event. Dimension tables contain the descriptive attributes used by BI applications for ﬁltering
  and grouping the facts. With the grain of a fact table ﬁrmly in mind, all the possible dimensions can be
  identiﬁed. Whenever possible, a dimension should be single valued when associated with a given fact
  row. Dimension tables are sometimes called the “soul” of the data warehouse because they contain the
  entry points and descriptive labels that enable the DW/BI system to be leveraged for business analysis.
  A disproportionate amount of effort is put into the data governance and development of dimension tables
  because they are the drivers of the user’s BI experience.

  Facts for Measurements
  Facts are the measurements that result from a business process event and are almost always numeric. A
  single fact table row has a one-to-one relationship to a measurement event as described by the fact
  table’s grain. Thus a fact table corresponds to a physical observable event, and not to the demands of a
  particular report. Within a fact table, only facts consistent with the declared grain are allowed. For
  example, in a retail sales transaction, the quantity of a product sold and its extended price are good
  facts, whereas the store manager’s salary is disallowed.

  Star Schemas and OLAP cubes
  Star schemas are dimensional structures deployed in a relational database management system
  (RDBMS). They characteristically consist of fact tables linked to associated dimension tables via primary/
  foreign key relationships. An online analytical processing (OLAP) cube is a dimensional structure
  implemented in a multidimensional database; it can be equivalent in content to, or more often derived
  from, a relational star schema. An OLAP cube contains dimensional attributes and facts, but it is
  accessed through languages with more analytic capabilities than SQL, such as XMLA. OLAP cubes are
  included in this list of basic techniques because an OLAP cube is often the final step in the deployment
  of a dimensional DW/BI system, or may exist as an aggregate structure based on a more atomic
  relational star schema.




© Kimball Group. All rights reserved.                                    Kimball Dimensional Modeling Techniques 2
  Grace Extensions to Dimensional Modeling
  Dimensional models are resilient when data relationships change. All the following changes can be
  implemented without altering any existing BI query or application, and without any change in query
  results.
      Facts consistent with the grain of an existing fact table can be added by creating new columns.
      Dimensions can be added to an existing fact table by creating new foreign key columns,
           presuming they don’t alter the fact table’s grain.
      Attributes can be added to an existing dimension table by creating new columns.
      The grain of a fact table can be made more atomic by adding attributes to an existing dimension
           table, and then restating the fact table at the lower grain, being careful to preserve the existing
           column names in the fact and dimension tables.




© Kimball Group. All rights reserved.                                     Kimball Dimensional Modeling Techniques 3
  

## Basic fact table techniques

Basic Fact Table Techniques

  Fact Table Structure
  A fact table contains the numeric measures produced by an operational measurement event in the
  real world. At the lowest grain, a fact table row corresponds to a measurement event and vice versa.
  Thus the fundamental design of a fact table is entirely based on a physical activity and is not
  inﬂuenced by the eventual reports that may be produced. In addition to numeric measures, a fact
  table always contains foreign keys for each of its associated dimensions, as well as optional
  degenerate dimension keys and date/time stamps. Fact tables are the primary target of computations
  and dynamic aggregations arising from queries.

  Additive, Semi-Additive, and Non-Additive Facts
  The numeric measures in a fact table fall into three categories. The most ﬂexible and useful facts are
  fully additive; additive measures can be summed across any of the dimensions associated with the
  fact table. Semi-additive measures can be summed across some dimensions, but not all; balance
  amounts are common semi-additive facts because they are additive across all dimensions except
  time. Finally, some measures are completely non-additive, such as ratios. A good approach for non-
  additive facts is, where possible, to store the fully additive components of the non-additive measure
  and sum these components into the ﬁnal answer set before calculating the ﬁnal non-additive fact.
  This ﬁnal calculation is often done in the BI layer or OLAP cube.

  Nulls in Fact Tables
  Null-valued measurements behave gracefully in fact tables. The aggregate functions (SUM, COUNT,
  MIN, MAX, and AVG) all do the “right thing” with null facts. However, nulls must be avoided in the
  fact table’s foreign keys because these nulls would automatically cause a referential integrity
  violation. Rather than a null foreign key, the associated dimension table must have a default row (and
  surrogate key) representing the unknown or not applicable condition.

  Conformed Facts
  If the same measurement appears in separate fact tables, care must be taken to make sure the
  technical deﬁnitions of the facts are identical if they are to be compared or computed together. If the
  separate fact deﬁnitions are consistent, the conformed facts should be identically named; but if they
  are incompatible, they should be differently named to alert the business users and BI applications.

  Transaction Fact Tables
  A row in a transaction fact table corresponds to a measurement event at a point in space and time.
  Atomic transaction grain fact tables are the most dimensional and expressive fact tables; this robust
  dimensionality enables the maximum slicing and dicing of transaction data. Transaction fact tables
  may be dense or sparse because rows exist only if measurements take place. These fact tables
  always contain a foreign key for each associated dimension, and optionally contain precise time
  stamps and degenerate dimension keys. The measured numeric facts must be consistent with the
  transaction grain.




© Kimball Group. All rights reserved.                                    Kimball Dimensional Modeling Techniques 4
  Periodic Snapshot Fact Tables
  A row in a periodic snapshot fact table summarizes many measurement events occurring over a
  standard period, such as a day, a week, or a month. The grain is the period, not the individual
  transaction. Periodic snapshot fact tables often contain many facts because any measurement event
  consistent with the fact table grain is permissible. These fact tables are uniformly dense in their
  foreign keys because even if no activity takes place during the period, a row is typically inserted in
  the fact table containing a zero or null for each fact.

  Accumulating Snapshot Fact Tables
  A row in an accumulating snapshot fact table summarizes the measurement events occurring at
  predictable steps between the beginning and the end of a process. Pipeline or workﬂow processes,
  such as order fulﬁllment or claim processing, that have a deﬁned start point, standard intermediate
  steps, and deﬁned end point can be modeled with this type of fact table. There is a date foreign key
  in the fact table for each critical milestone in the process. An individual row in an accumulating
  snapshot fact table, corresponding for instance to a line on an order, is initially inserted when the
  order line is created. As pipeline progress occurs, the accumulating fact table row is revisited and
  updated. This consistent updating of accumulating snapshot fact rows is unique among the three
  types of fact tables. In addition to the date foreign keys associated with each critical process step,
  accumulating snapshot fact tables contain foreign keys for other dimensions and optionally contain
  degenerate dimensions. They often include numeric lag measurements consistent with the grain,
  along with milestone completion counters.

  Factless Fact Tables
  Although most measurement events capture numerical results, it is possible that the event merely
  records a set of dimensional entities coming together at a moment in time. For example, an event of
  a student attending a class on a given day may not have a recorded numeric fact, but a fact row with
  foreign keys for calendar day, student, teacher, location, and class is well-deﬁned. Likewise,
  customer communications are events, but there may be no associated metrics. Factless fact tables
  can also be used to analyze what didn’t happen. These queries always have two parts: a factless
  coverage table that contains all the possibilities of events that might happen and an activity table that
  contains the events that did happen. When the activity is subtracted from the coverage, the result is
  the set of events that did not happen.

  Aggregate Fact Tables or Cubes
  Aggregate fact tables are simple numeric rollups of atomic fact table data built solely to accelerate
  query performance. These aggregate fact tables should be available to the BI layer at the same time
  as the atomic fact tables so that BI tools smoothly choose the appropriate aggregate level at query
  time. This process, known as aggregate navigation, must be open so that every report writer, query
  tool, and BI application harvests the same performance beneﬁts. A properly designed set of
  aggregates should behave like database indexes, which accelerate query performance but are not
  encountered directly by the BI applications or business users. Aggregate fact tables contain foreign
  keys to shrunken conformed dimensions, as well as aggregated facts created by summing measures
  from more atomic fact tables. Finally, aggregate OLAP cubes with summarized measures are
  frequently built in the same way as relational aggregates, but the OLAP cubes are meant to be
  accessed directly by the business users.



© Kimball Group. All rights reserved.                                      Kimball Dimensional Modeling Techniques 5
  Consolidated Fact Tables
  It is often convenient to combine facts from multiple processes together into a single consolidated
  fact table if they can be expressed at the same grain. For example, sales actuals can be consolidated
  with sales forecasts in a single fact table to make the task of analyzing actuals versus forecasts
  simple and fast, as compared to assembling a drill-across application using separate fact tables.
  Consolidated fact tables add burden to the ETL processing, but ease the analytic burden on the BI
  applications. They should be considered for cross-process metrics that are frequently analyzed
  together.




© Kimball Group. All rights reserved.                                   Kimball Dimensional Modeling Techniques 6
  

## Basic dimension table techniques

Basic Dimension Table Techniques

  Dimension Table Structure
  Every dimension table has a single primary key column. This primary key is embedded as a foreign
  key in any associated fact table where the dimension row’s descriptive context is exactly correct for
  that fact table row. Dimension tables are usually wide, ﬂat denormalized tables with many low-
  cardinality text attributes. While operational codes and indicators can be treated as attributes, the
  most powerful dimension attributes are populated with verbose descriptions. Dimension table
  attributes are the primary target of constraints and grouping speciﬁcations from queries and BI
  applications. The descriptive labels on reports are typically dimension attribute domain values.

  Dimension Surrogate Keys
  A dimension table is designed with one column serving as a unique primary key. This primary key
  cannot be the operational system’s natural key because there will be multiple dimension rows for that
  natural key when changes are tracked over time. In addition, natural keys for a dimension may be
  created by more than one source system, and these natural keys may be incompatible or poorly
  administered. The DW/BI system needs to claim control of the primary keys of all dimensions; rather
  than using explicit natural keys or natural keys with appended dates, you should create anonymous
  integer primary keys for every dimension. These dimension surrogate keys are simple integers,
  assigned in sequence, starting with the value 1, every time a new key is needed. The date dimension
  is exempt from the surrogate key rule; this highly predictable and stable dimension can use a more
  meaningful primary key.

  Natural, Durable, and Supernatural Keys
  Natural keys created by operational source systems are subject to business rules outside the control
  of the DW/BI system. For instance, an employee number (natural key) may be changed if the
  employee resigns and then is rehired. When the data warehouse wants to have a single key for that
  employee, a new durable key must be created that is persistent and does not change in this situation.
  This key is sometimes referred to as a durable supernatural key. The best durable keys have a
  format that is independent of the original business process and thus should be simple integers
  assigned in sequence beginning with 1. While multiple surrogate keys may be associated with an
  employee over time as their proﬁle changes, the durable key never changes.

  Drilling Down
  Drilling down is the most fundamental way data is analyzed by business users. Drilling down simply
  means adding a row header to an existing query; the new row header is a dimension attribute
  appended to the GROUP BY expression in an SQL query. The attribute can come from any
  dimension attached to the fact table in the query. Drilling down does not require the deﬁnition of
  predetermined hierarchies or drill-down paths.

  Degenerate Dimensions
  Sometimes a dimension is deﬁned that has no content except for its primary key. For example, when
  an invoice has multiple line items, the line item fact rows inherit all the descriptive dimension foreign
  keys of the invoice, and the invoice is left with no unique content. But the invoice number remains a
  valid dimension key for fact tables at the line item level. This degenerate dimension is placed


© Kimball Group. All rights reserved.                                      Kimball Dimensional Modeling Techniques 7
  in the fact table with the explicit acknowledgment that there is no associated dimension table.
  Degenerate dimensions are most common with transaction and accumulating snapshot fact tables.

  Denormalized Flattened Dimensions
  In general, dimensional designers must resist the normalization urges caused by years of operational
  database designs and instead denormalize the many-to-one ﬁxed depth hierarchies into separate
  attributes on a ﬂattened dimension row. Dimension denormalization supports dimensional modeling’s
  twin objectives of simplicity and speed.

  Multiple Hierarchies in Dimensions
  Many dimensions contain more than one natural hierarchy. For example, calendar date dimensions
  may have a day to week to ﬁscal period hierarchy, as well as a day to month to year hierarchy.
  Location intensive dimensions may have multiple geographic hierarchies. In all of these cases, the
  separate hierarchies can gracefully coexist in the same dimension table.

  Flags and Indicators as Textual Dimension Attributes
  Cryptic abbreviations, true/false ﬂags, and operational indicators should be supplemented in
  dimension tables with full text words that have meaning when independently viewed. Operational
  codes with embedded meaning within the code value should be broken down with each part of the
  code expanded into its own separate descriptive dimension attribute.

  Null Attributes in Dimensions
  Null-valued dimension attributes result when a given dimension row has not been fully populated, or
  when there are attributes that are not applicable to all the dimension’s rows. In both cases, we
  recommend substituting a descriptive string, such as Unknown or Not Applicable in place of the null
  value. Nulls in dimension attributes should be avoided because different databases handle grouping
  and constraining on nulls inconsistently.

  Calendar Date Dimensions
  Calendar date dimensions are attached to virtually every fact table to allow navigation of the fact
  table through familiar dates, months, ﬁscal periods, and special days on the calendar. You would
  never want to compute Easter in SQL, but rather want to look it up in the calendar date dimension.
  The calendar date dimension typically has many attributes describing characteristics such as week
  number, month name, ﬁscal period, and national holiday indicator. To facilitate partitioning, the
  primary key of a date dimension can be more meaningful, such as an integer representing
  YYYYMMDD, instead of a sequentially-assigned surrogate key. However, the date dimension table
  needs a special row to represent unknown or to-be-determined dates. Filtering and grouping should
  be based on the date dimension’s attributes, not the smart key. When further precision is needed, a
  separate date/time stamp can be added to the fact table. The date/time stamp is not a foreign key to
  a dimension table, but rather is a standalone column. If business users constrain or group on time-of-
  day attributes, such as day part grouping or shift number, then you would add a separate time-of-day
  dimension foreign key to the fact table.




© Kimball Group. All rights reserved.                                    Kimball Dimensional Modeling Techniques 8
  Role-Playing Dimensions
  A single physical dimension can be referenced multiple times in a fact table, with each reference
  linking to a logically distinct role for the dimension. For instance, a fact table can have several dates,
  each of which is represented by a foreign key to the date dimension. It is essential that each foreign
  key refers to a separate view of the date dimension so that the references are independent. These
  separate dimension views (with unique attribute column names) are called roles.

  Junk Dimensions
  Transactional business processes typically produce a number of miscellaneous, low-cardinality ﬂags
  and indicators. Rather than making separate dimensions for each ﬂag and attribute, you can create a
  single junk dimension combining them together. This dimension, frequently labeled as a transaction
  proﬁle dimension in a schema, does not need to be the Cartesian product of all the attributes’
  possible values, but should only contain the combination of values that actually occur in the source
  data.

  Snowflaked Dimensions
  When a hierarchical relationship in a dimension table is normalized, low-cardinality attributes appear
  as secondary tables connected to the base dimension table by an attribute key. When this process is
  repeated with all the dimension table’s hierarchies, a characteristic multilevel structure is created that
  is called a snowﬂake. Although the snowﬂake represents hierarchical data accurately, you should
  avoid snowﬂakes because it is difficult for business users to understand and navigate snowﬂakes.
  They can also negatively impact query performance. A ﬂattened denormalized dimension table
  contains exactly the same information as a snowﬂaked dimension.

  Outrigger Dimensions
  A dimension can contain a reference to another dimension table. For instance, a bank account
  dimension can reference a separate dimension representing the date the account was opened.
  These secondary dimension references are called outrigger dimensions. Outrigger dimensions are
  permissible, but should be used sparingly. In most cases, the correlations between dimensions
  should be demoted to a fact table, where both dimensions are represented as separate foreign keys.




© Kimball Group. All rights reserved.                                      Kimball Dimensional Modeling Techniques 9
  

## Integration via conformed dimensions

Integration via Conformed Dimensions

  Conformed Dimensions
  Dimension tables conform when attributes in separate dimension tables have the same column
  names and domain contents. Information from separate fact tables can be combined in a single
  report by using conformed dimension attributes that are associated with each fact table. When a
  conformed attribute is used as the row header (that is, the grouping column in the SQL query), the
  results from the separate fact tables can be aligned on the same rows in a drill-across report. This is
  the essence of integration in an enterprise DW/ BI system. Conformed dimensions, deﬁned once in
  collaboration with the business’s data governance representatives, are reused across fact tables;
  they deliver both analytic consistency and reduced future development costs because the wheel is
  not repeatedly re-created

  Shrunken Rollup Dimensions
  Shrunken dimensions are conformed dimensions that are a subset of rows and /or columns of a base
  dimension. Shrunken rollup dimensions are required when constructing aggregate fact tables. They
  are also necessary for business processes that naturally capture data at a higher level of granularity,
  such as a forecast by month and brand (instead of the more atomic date and product associated with
  sales data). Another case of conformed dimension subsetting occurs when two dimensions are at the
  same level of detail, but one represents only a subset of rows.

  Drilling Across
  Drilling across simply means making separate queries against two or more fact tables where the row
  headers of each query consist of identical conformed attributes. The answer sets from the two
  queries are aligned by performing a sort-merge operation on the common dimension attribute row
  headers. BI tool vendors refer to this functionality by various names, including stitch and multipass
  query.

  Value Chain
  A value chain identiﬁes the natural ﬂow of an organization’s primary business processes. For
  example, a retailer’s value chain may consist of purchasing to ware- housing to retail sales. A general
  ledger value chain may consist of budgeting to commitments to payments. Operational source
  systems typically produce transactions or snapshots at each step of the value chain. Because each
  process produces unique metrics at unique time intervals with unique granularity and dimensionality,
  each process typically spawns at least one atomic fact table.

  Enterprise Data Warehouse Bus Architecture
  The enterprise data warehouse bus architecture provides an incremental approach to building the
  enterprise DW/BI system. This architecture decomposes the DW/ BI planning process into
  manageable pieces by focusing on business processes, while delivering integration via standardized
  conformed dimensions that are reused across processes. It provides an architectural framework,
  while also decomposing the program to encourage manageable agile implementations corresponding
  to the rows on the enterprise data warehouse bus matrix. The bus architecture is technology and
  database platform independent; both relational and OLAP dimensional structures can participate.



© Kimball Group. All rights reserved.                                    Kimball Dimensional Modeling Techniques 10
  Enterprise Data Warehouse Bus Matrix
  The enterprise data warehouse bus matrix is the essential tool for designing and communicating the
  enterprise data warehouse bus architecture. The rows of the matrix are business processes and the
  columns are dimensions. The shaded cells of the matrix indicate whether a dimension is associated
  with a given business process. The design team scans each row to test whether a candidate
  dimension is well-deﬁned for the business process and also scans each column to see where a
  dimension should be conformed across multiple business processes. Besides the technical design
  considerations, the bus matrix is used as input to prioritize DW/BI projects with business
  management as teams should implement one row of the matrix at a time.

  The detailed implementation bus matrix is a more granular bus matrix where each business process
  row has been expanded to show speciﬁc fact tables or OLAP cubes. At this level of detail, the precise
  grain statement and list of facts can be documented.

  Opportunity/Stakeholder Matrix
  After the enterprise data warehouse bus matrix rows have been identiﬁed, you can draft a different
  matrix by replacing the dimension columns with business functions, such as marketing, sales, and
  ﬁnance, and then shading the matrix cells to indicate which business functions are interested in
  which business process rows. The opportunity/stakeholder matrix helps identify which business
  groups should be invited to the collaborative design sessions for each process-centric row.




© Kimball Group. All rights reserved.                                   Kimball Dimensional Modeling Techniques 11
  

## Slowly changing dimension techniques

Slowly Changing Dimension Techniques

  Type 0: Retain Original
  With slowly changing dimension type 0, the dimension attribute value never changes, so facts are
  always grouped by this original value. Type 0 is appropriate for any attribute labeled “original,” such
  as a customer’s original credit score or a durable identiﬁer. It also applies to most attributes in a date
  dimension.

  Type 1: Overwrite
  With slowly changing dimension type 1, the old attribute value in the dimension row is overwritten
  with the new value; type 1 attributes always reﬂects the most recent assignment, and therefore this
  technique destroys history. Although this approach is easy to implement and does not create
  additional dimension rows, you must be careful that aggregate fact tables and OLAP cubes affected
  by this change are recomputed.

  Type 2: Add New Row
  Slowly changing dimension type 2 changes add a new row in the dimension with the updated
  attribute values. This requires generalizing the primary key of the dimension beyond the natural or
  durable key because there will potentially be multiple rows describing each member. When a new
  row is created for a dimension member, a new primary surrogate key is assigned and used as a
  foreign key in all fact tables from the moment of the update until a subsequent change creates a new
  dimension key and updated dimension row. A minimum of three additional columns should be added
  to the dimension row with type 2 changes: 1) row effective date or date/time stamp; 2) row expiration
  date or date/time stamp; and 3) current row indicator.

  Type 3: Add New Attribute
  Slowly changing dimension type 3 changes add a new attribute in the dimension to preserve the old
  attribute value; the new value overwrites the main attribute as in a type 1 change. This kind of type 3
  change is sometimes called an alternate reality. A business user can group and ﬁlter fact data by
  either the current value or alternate reality. This slowly changing dimension technique is used
  relatively infrequently.

  Type 4: Add Mini-Dimension
  Slowly changing dimension type 4 is used when a group of attributes in a dimension rapidly changes
  and is split off to a mini-dimension. This situation is sometimes called a rapidly changing monster
  dimension. Frequently used attributes in multimillion-row dimension tables are mini-dimension design
  candidates, even if they don’t frequently change. The type 4 mini-dimension requires its own unique
  primary key; the primary keys of both the base dimension and mini-dimension are captured in the
  associated fact tables.

  Type 5: Add Mini-Dimension and Type 1 Outrigger
  Slowly changing dimension type 5 is used to accurately preserve historical attribute values, plus
  report historical facts according to current attribute values. Type 5 builds on the type 4 mini-
  dimension by also embedding a current type 1 reference to the mini-dimension in the base
  dimension. This enables the currently-assigned mini- dimension attributes to be accessed along with

© Kimball Group. All rights reserved.                                      Kimball Dimensional Modeling Techniques 12
  the others in the base dimension without linking through a fact table. Logically, you’d represent the
  base dimension and mini-dimension outrigger as a single table in the presentation area. The ETL
  team must overwrite this type 1 mini-dimension reference whenever the current mini-dimension
  assignment changes.

  Type 6: Add Type 1 Attributes to Type 2 Dimension
  Like type 5, slowly changing dimension type 6 also delivers both historical and current dimension
  attribute values. Type 6 builds on the type 2 technique by also embedding current type 1 versions of
  the same attributes in the dimension row so that fact rows can be ﬁltered or grouped by either the
  type 2 attribute value in effect when the measurement occurred or the attribute’s current value. In this
  case, the type 1 attribute is systematically overwritten on all rows associated with a particular durable
  key whenever the attribute is updated.

  Type 7: Dual Type 1 and Type 2 Dimensions
  Slowly changing dimension type 7 is the ﬁnal hybrid technique used to support both as-was and as-is
  reporting. A fact table can be accessed through a dimension modeled both as a type 1 dimension
  showing only the most current attribute values, or as a type 2 dimension showing correct
  contemporary historical proﬁles. The same dimension table enables both perspectives. Both the
  durable key and primary surrogate key of the dimension are placed in the fact table. For the type 1
  perspective, the current ﬂag in the dimension is constrained to be current, and the fact table is joined
  via the durable key. For the type 2 perspective, the current ﬂag is not constrained, and the fact table
  is joined via the surrogate primary key. These two perspectives would be deployed as separate views
  to the BI applications.




© Kimball Group. All rights reserved.                                      Kimball Dimensional Modeling Techniques 13
  

## Late arriving facts and dimensions

Late Arriving Facts
  A fact row is late arriving if the most current dimensional context for new fact rows does not match
  the incoming row. This happens when the fact row is delayed. In this case, the relevant dimensions
  must be searched to ﬁnd the dimension keys that were effective when the late arriving measurement
  event occurred.




© Kimball Group. All rights reserved.                                      Kimball Dimensional Modeling Techniques 17
  

Late Arriving Dimensions
  Sometimes the facts from an operational business process arrive minutes, hours, days, or weeks
  before the associated dimension context. For example, in a real-time data delivery situation, an
  inventory depletion row may arrive showing the natural key of a customer committing to purchase a
  particular product. In a real-time ETL system, this row must be posted to the BI layer, even if the
  identity of the customer or product cannot be immediately determined. In these cases, special
  dimension rows are created with the unresolved natural keys as attributes. Of course, these
  dimension rows must contain generic unknown values for most of the descriptive columns;
  presumably the proper dimensional context will follow from the source at a later time. When this
  dimensional context is eventually supplied, the placeholder dimension rows are updated with type 1
  overwrites. Late arriving dimension data also occurs when retroactive changes are made to type 2
  dimension attributes. In this case, a new row needs to be inserted in the dimension table, and then
  the associated fact rows must be restated.



© Kimball Group. All rights reserved.                                    Kimball Dimensional Modeling Techniques 20
  
