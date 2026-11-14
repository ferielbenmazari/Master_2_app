<!-- Source externe (hors supports du cours ISI7), ajoutée le 2026-11-14 (docs/06 §9.6).
Référence : S. Chaudhuri, U. Dayal, « An Overview of Data Warehousing and OLAP Technology », ACM SIGMOD Record 26(1):65-74, 1997, DOI 10.1145/248603.248616.
URL : https://www.cs.ubc.ca/~rap/teaching/504/2006/readings/chaudhuri-olap.pdf (copie de cours, University of British Columbia) — consulté le 2026-11-14. Extraits copiés tels quels (pdftotext, ordre de lecture). -->

# Chaudhuri & Dayal (1997) — extraits

## Introduction : entrepôt de données, OLTP et OLAP

An Overview of Data Warehousing and OLAP Technology
Surajit Chaudhuri

Umeshwar Dayal

Microsoft Research, Redmond

Hewlett-Packard Labs, Palo Alto

surajitc@microsoft.com

dayal@hpl.hp.com

Abstract
Data warehousing and on-line analytical processing (OLAP)
are essential elements of decision support, which has
increasingly become a focus of the database industry. Many
commercial products and services are now available, and all
of the principal database management system vendors now
have offerings in these areas. Decision support places some
rather different requirements on database technology
compared to traditional on-line transaction processing
applications. This paper provides an overview of data
warehousing and OLAP technologies, with an emphasis on
their new requirements. We describe back end tools for
extracting, cleaning and loading data into a data warehouse;
multidimensional data models typical of OLAP; front end
client tools for querying and data analysis; server extensions
for efficient query processing; and tools for metadata
management and for managing the warehouse. In addition to
surveying the state of the art, this paper also identifies some
promising research issues, some of which are related to
problems that the database research community has worked
on for years, but others are only just beginning to be
addressed. This overview is based on a tutorial that the
authors presented at the VLDB Conference, 1996.

A data warehouse is a “subject-oriented, integrated, timevarying, non-volatile collection of data that is used primarily
in organizational decision making.”1 Typically, the data
warehouse is maintained separately from the organization’s
operational databases. There are many reasons for doing this.
The data warehouse supports on-line analytical processing
(OLAP), the functional and performance requirements of
which are quite different from those of the on-line transaction
processing (OLTP) applications traditionally supported by the
operational databases.
OLTP applications typically automate clerical data processing
tasks such as order entry and banking transactions that are the
bread-and-butter day-to-day operations of an organization.
These tasks are structured and repetitive, and consist of short,
atomic, isolated transactions. The transactions require
detailed, up-to-date data, and read or update a few (tens of)
records accessed typically on their primary keys. Operational
databases tend to be hundreds of megabytes to gigabytes in
size. Consistency and recoverability of the database are
critical, and maximizing transaction throughput is the key
performance metric. Consequently, the database is designed
to reflect the operational semantics of known applications,
and, in particular, to minimize concurrency conflicts.

1. Introduction
Data warehousing is a collection of decision support
technologies, aimed at enabling the knowledge worker
(executive, manager, analyst) to make better and faster
decisions. The past three years have seen explosive growth,
both in the number of products and services offered, and in
the adoption of these technologies by industry. According to
the META Group, the data warehousing market, including
hardware, database software, and tools, is projected to grow
from $2 billion in 1995 to $8 billion in 1998. Data
warehousing technologies have been successfully deployed in
many industries: manufacturing (for order shipment and
customer support), retail (for user profiling and inventory
management), financial services (for claims analysis, risk
analysis, credit card analysis, and fraud detection),
transportation (for fleet management), telecommunications
(for call analysis and fraud detection), utilities (for power
usage analysis), and healthcare (for outcomes analysis). This
paper presents a roadmap of data warehousing technologies,
focusing on the special requirements that data warehouses
place on database management systems (DBMSs).

Data warehouses, in contrast, are targeted for decision
support. Historical, summarized and consolidated data is
more important than detailed, individual records. Since data
warehouses contain consolidated data, perhaps from several
operational databases, over potentially long periods of time,
they tend to be orders of magnitude larger than operational
databases; enterprise data warehouses are projected to be
hundreds of gigabytes to terabytes in size. The workloads are
query intensive with mostly ad hoc, complex queries that can
access millions of records and perform a lot of scans, joins,
and aggregates. Query throughput and response times are
more important than transaction throughput.
To facilitate complex analyses and visualization, the data in a
warehouse is typically modeled multidimensionally. For
example, in a sales data warehouse, time of sale, sales district,
salesperson, and product might be some of the dimensions
of interest. Often, these dimensions are hierarchical; time of
sale may be organized as a day-month-quarter-year hierarchy,
product as a product-category-industry hierarchy. Typical

OLAP operations include rollup (increasing the level of
aggregation) and drill-down (decreasing the level of
aggregation or increasing detail) along one or more
dimension hierarchies, slice_and_dice (selection and
projection), and pivot (re-orienting the multidimensional view
of data).
Given that operational databases are finely tuned to support
known OLTP workloads, trying to execute complex OLAP
queries against the operational databases would result in
unacceptable performance. Furthermore, decision support
requires data that might be missing from the operational
databases; for instance, understanding trends or making
predictions requires historical data, whereas operational
databases store only current data. Decision support usually
requires consolidating data from many heterogeneous
sources: these might include external sources such as stock
market feeds, in addition to several operational databases.
The different sources might contain data of varying quality, or
use inconsistent representations, codes and formats, which
have to be reconciled. Finally, supporting the
multidimensional data models and operations typical of
OLAP requires special data organization, access methods,
and implementation methods, not generally provided by
commercial DBMSs targeted for OLTP. It is for all these
reasons that data warehouses are implemented separately
from operational databases.
Data warehouses might be implemented on standard or
extended relational DBMSs, called
Relational OLAP
(ROLAP) servers. These servers assume that data is stored in
relational databases, and they support extensions to SQL and
special access and implementation methods to efficiently
implement the multidimensional data model and operations.
In contrast, multidimensional OLAP (MOLAP) servers are
servers that directly store multidimensional data in special
data structures (e.g., arrays) and implement the OLAP
operations over these special data structures.
There is more to building and maintaining a data warehouse
than selecting an OLAP server and defining a schema and
some complex queries for the warehouse. Different
architectural alternatives exist. Many organizations want to
implement an integrated enterprise warehouse that collects
information about all subjects (e.g., customers, products,
sales, assets, personnel) spanning the whole organization.
However, building an enterprise warehouse is a long and
complex process, requiring extensive business modeling, and
may take many years to succeed. Some organizations are
settling for data marts instead, which are departmental
subsets focused on selected subjects (e.g., a marketing data
mart may include customer, product, and sales information).
These data marts enable faster roll out, since they do not
require enterprise-wide consensus, but they may lead to
complex integration problems in the long run, if a complete
business model is not developed.

In Section 2, we describe a typical data warehousing
architecture, and the process of designing and operating a
data warehouse. In Sections 3-7, we review relevant
technologies for loading and refreshing data in a data
warehouse, warehouse servers, front end tools, and
warehouse management tools. In each case, we point out
what is different from traditional database technology, and we
mention representative products. In this paper, we do not
intend to provide comprehensive descriptions of all products
in every category. We encourage the interested reader to look
at recent issues of trade magazines such as Databased
Advisor, Database Programming and Design, Datamation,
and DBMS Magazine, and vendors’ Web sites for more
details of commercial products, white papers, and case
studies. The OLAP Council2 is a good source of information
on standardization efforts across the industry, and a paper by
Codd, et al.3 defines twelve rules for OLAP products. Finally,
a good source of references on data warehousing and OLAP
is the Data Warehousing Information Center4.
Research in data warehousing is fairly recent, and has focused
primarily on query processing and view maintenance issues.
There still are many open research problems. We conclude in
Section 8 with a brief mention of these issues.

2. Architecture and End-to-End Process
Figure 1 shows a typical data warehousing architecture.
Monitoring & Admnistration
Metadata
Repository

OLAP
Servers

Analysis

Data Warehouse
External
sources
Operational
dbs

Extract
Transform
Load
Refresh

Query/Reporting
Serve
Data Mining

Data sources
Data Marts

Tools

Figure 1. Data Warehousing Architecture
It includes tools for extracting data from multiple operational
databases and external sources; for cleaning, transforming
and integrating this data; for loading data into the data
warehouse; and for periodically refreshing the warehouse to
reflect updates at the sources and to purge data from the
warehouse, perhaps onto slower archival storage. In addition
to the main warehouse, there may be several departmental
data marts. Data in the warehouse and data marts is stored
and managed by one or more warehouse servers, which
present multidimensional views of data to a variety of front
end tools: query tools, report writers, analysis tools, and data
mining tools. Finally, there is a repository for storing and

managing metadata, and tools for
administering the warehousing system.

monitoring

and

The warehouse may be distributed for load balancing,
scalability, and higher availability. In such a distributed
architecture, the metadata repository is usually replicated with
each fragment of the warehouse, and the entire warehouse is
administered centrally. An alternative architecture,
implemented for expediency when it may be too expensive to
construct a single logically integrated enterprise warehouse, is
a federation of warehouses or data marts, each with its own
repository and decentralized administration.
Designing and rolling out a data warehouse is a complex
process, consisting of the following activities5.
• Define the architecture, do capacity planning, and select
the storage servers, database and OLAP servers, and
tools.
• Integrate the servers, storage, and client tools.
• Design the warehouse schema and views.
• Define the physical warehouse organization, data
placement, partitioning, and access methods.
• Connect the sources using gateways, ODBC drivers, or
other wrappers.
• Design and implement scripts for data extraction,
cleaning, transformation, load, and refresh.
• Populate the repository with the schema and view
definitions, scripts, and other metadata.
• Design and implement end-user applications.
• Roll out the warehouse and applications.

## Back end tools and utilities

3. Back End Tools and Utilities
Data warehousing systems use a variety of data extraction and
cleaning tools, and load and refresh utilities for populating
warehouses. Data extraction from “foreign” sources is usually
implemented via gateways and standard interfaces (such as
Information Builders EDA/SQL, ODBC, Oracle Open
Connect, Sybase Enterprise Connect, Informix Enterprise
Gateway).
Data Cleaning
Since a data warehouse is used for decision making, it is
important that the data in the warehouse be correct. However,
since large volumes of data from multiple sources are
involved, there is a high probability of errors and anomalies
in the data.. Therefore, tools that help to detect data
anomalies and correct them can have a high payoff. Some
examples where data cleaning becomes necessary are:
inconsistent field lengths, inconsistent descriptions,
inconsistent value assignments, missing entries and violation
of integrity constraints. Not surprisingly, optional fields in
data entry forms are significant sources of inconsistent data.

There are three related, but somewhat different, classes of
data cleaning tools. Data migration tools allow simple
transformation rules to be specified; e.g., “replace the string
gender by sex”. Warehouse Manager from Prism is an
example of a popular tool of this kind. Data scrubbing tools
use domain-specific knowledge (e.g., postal addresses) to do
the scrubbing of data. They often exploit parsing and fuzzy
matching techniques to accomplish cleaning from multiple
sources. Some tools make it possible to specify the “relative
cleanliness” of sources. Tools such as Integrity and Trillum
fall in this category. Data auditing tools make it possible to
discover rules and relationships (or to signal violation of
stated rules) by scanning data. Thus, such tools may be
considered variants of data mining tools. For example, such a
tool may discover a suspicious pattern (based on statistical
analysis) that a certain car dealer has never received any
complaints.
Load
After extracting, cleaning and transforming, data must be
loaded into the warehouse. Additional preprocessing may still
be required: checking integrity constraints; sorting;
summarization, aggregation and other computation to build
the derived tables stored in the warehouse; building indices
and other access paths; and partitioning to multiple target
storage areas. Typically, batch load utilities are used for this
purpose. In addition to populating the warehouse, a load
utility must allow the system administrator to monitor status,
to cancel, suspend and resume a load, and to restart after
failure with no loss of data integrity.
The load utilities for data warehouses have to deal with much
larger data volumes than for operational databases. There is
only a small time window (usually at night) when the
warehouse can be taken offline to refresh it. Sequential loads
can take a very long time, e.g., loading a terabyte of data can
take weeks and months! Hence, pipelined and partitioned
parallelism are typically exploited 6. Doing a full load has the
advantage that it can be treated as a long batch transaction
that builds up a new database. While it is in progress, the
current database can still support queries; when the load
transaction commits, the current database is replaced with the
new one. Using periodic checkpoints ensures that if a failure
occurs during the load, the process can restart from the last
checkpoint.
However, even using parallelism, a full load may still take too
long. Most commercial utilities (e.g., RedBrick Table
Management Utility) use incremental loading during refresh
to reduce the volume of data that has to be incorporated into
the warehouse. Only the updated tuples are inserted.
However, the load process now is harder to manage. The
incremental load conflicts with ongoing queries, so it is
treated as a sequence of shorter transactions (which commit
periodically, e.g., after every 1000 records or every few
seconds), but now this sequence of transactions has to be

Refresh techniques may also depend on the characteristics of
the source and the capabilities of the database servers.
Extracting an entire source file or database is usually too
expensive, but may be the only choice for legacy data
sources. Most contemporary database systems provide
replication servers that support incremental techniques for
propagating updates from a primary database to one or more
replicas. Such replication servers can be used to
incrementally refresh a warehouse when the sources change.
There are two basic replication techniques: data shipping and
transaction shipping.
In data shipping (e.g., used in the Oracle Replication Server,
Praxis OmniReplicator), a table in the warehouse is treated as
a remote snapshot of a table in the source database. After_row
triggers are used to update a snapshot log table whenever the
source table changes; and an automatic refresh schedule (or a
manual refresh procedure) is then set up to propagate the
updated data to the remote snapshot.
In transaction shipping (e.g., used in the Sybase Replication
Server and Microsoft SQL Server), the regular transaction log
is used, instead of triggers and a special snapshot log table.
At the source site, the transaction log is sniffed to detect
updates on replicated tables, and those log records are
transferred to a replication server, which packages up the
corresponding transactions to update the replicas. Transaction
shipping has the advantage that it does not require triggers,
which can increase the workload on the operational source
databases. However, it cannot always be used easily across
DBMSs from different vendors, because there are no standard
APIs for accessing the transaction log.
Such replication servers have been used for refreshing data
warehouses. However, the refresh cycles have to be properly
chosen so that the volume of data does not overwhelm the
incremental load utility.
In addition to propagating changes to the base data in the
warehouse, the derived data also has to be updated
correspondingly. The problem of constructing logically

4. Conceptual Model and Front End Tools

## Conceptual model and front end tools

A popular conceptual model that influences the front-end
tools, database design, and the query engines for OLAP is the
multidimensional view of data in the warehouse. In a
multidimensional data model, there is a set of numeric
measures that are the objects of analysis. Examples of such
measures are sales, budget, revenue, inventory, ROI (return
on investment). Each of the numeric measures depends on a
set of dimensions, which provide the context for the measure.
For example, the dimensions associated with a sale amount
can be the city, product name, and the date when the sale was
made. The dimensions together are assumed to uniquely
determine the measure. Thus, the multidimensional data
views a measure as a value in the multidimensional space of
dimensions. Each dimension is described by a set of
attributes. For example, the Product dimension may consist of
four attributes: the category and the industry of the product,
year of its introduction, and the average profit margin. For
example, the soda Surge belongs to the category beverage
and the food industry, was introduced in 1996, and may have
an average profit margin of 80%. The attributes of a
dimension may be related via a hierarchy of relationships. In
the above example, the product name is related to its category
and the industry attribute through such a hierarchical
relationship.

Ci
ty

Refresh
Refreshing a warehouse consists in propagating updates on
source data to correspondingly update the base data and
derived data stored in the warehouse. There are two sets of
issues to consider: when to refresh, and how to refresh.
Usually, the warehouse is refreshed periodically (e.g., daily or
weekly). Only if some OLAP queries need current data (e.g.,
up to the minute stock quotes), is it necessary to propagate
every update. The refresh policy is set by the warehouse
administrator, depending on user needs and traffic, and may
be different for different sources.

correct updates for incrementally updating derived data
(materialized views) has been the subject of much research 7 8
9 10
. For data warehousing, the most significant classes of
derived data are summary tables, single-table indices and
join indices.

Juice
Cola
Milk
Cream
Toothpaste
Soap

Product

coordinated to ensure consistency of derived data and indices
with the base data.

S
N

Dimensions: Product, City, Date
Hierarchical summarization paths

W

Industry

Country

Year

Category

State

Quarter

Product

City

Month Week

10
50
20
12
15
10

1 2 3 4 5 67

Date

Date

Figure 2. Multidimensional data
Another distinctive feature of the conceptual model for
OLAP is its stress on aggregation of measures by one or
more dimensions as one of the key operations; e.g.,
computing and ranking the total sales by each county (or by
each year). Other popular operations include comparing two
measures (e.g., sales and budget) aggregated by the same
dimensions. Time is a dimension that is of particular
significance to decision support (e.g., trend analysis). Often,
it is desirable to have built-in knowledge of calendars and
other aspects of the time dimension.

Front End Tools
The multidimensional data model grew out of the view of
business data popularized by PC spreadsheet programs that
were extensively used by business analysts. The spreadsheet
is still the most compelling front-end application for OLAP.
The challenge in supporting a query environment for OLAP
can be crudely summarized as that of supporting spreadsheet
operations efficiently over large multi-gigabyte databases.
Indeed, the Essbase product of Arbor Corporation uses
Microsoft Excel as the front-end tool for its multidimensional
engine.
We shall briefly discuss some of the popular operations that
are supported by the multidimensional spreadsheet
applications. One such operation is pivoting. Consider the
multidimensional schema of Figure 2 represented in a
spreadsheet where each row corresponds to a sale . Let there
be one column for each dimension and an extra column that
represents the amount of sale. The simplest view of pivoting
is that it selects two dimensions that are used to aggregate a
measure, e.g., sales in the above example. The aggregated
values are often displayed in a grid where each value in the
(x,y) coordinate corresponds to the aggregated value of the
measure when the first dimension has the value x and the
second dimension has the value y. Thus, in our example, if
the selected dimensions are city and year, then the x-axis may
represent all values of city and the y-axis may represent the
years. The point (x,y) will represent the aggregated sales for
city x in the year y. Thus, what were values in the original
spreadsheets have now become row and column headers in
the pivoted spreadsheet.
Other operators related to pivoting are rollup or drill-down.
Rollup corresponds to taking the current data object and
doing a further group-by on one of the dimensions. Thus, it is
possible to roll-up the sales data, perhaps already aggregated
on city, additionally by product. The drill-down operation is
the converse of rollup. Slice_and_dice corresponds to
reducing the dimensionality of the data, i.e., taking a
projection of the data on a subset of dimensions for selected
values of the other dimensions. For example, we can
slice_and_dice sales data for a specific product to create a
table that consists of the dimensions city and the day of sale.
The other popular operators include ranking (sorting),
selections and defining computed attributes.
Although the multidimensional spreadsheet has attracted a lot
of interest since it empowers the end user to analyze business
data, this has not replaced traditional analysis by means of a
managed query environment. These environments use stored
procedures and predefined complex queries to provide
packaged analysis tools. Such tools often make it possible for
the end-user to query in terms of domain-specific business

data. These applications often use raw data access tools and
optimize the access patterns depending on the back end
database server. In addition, there are query environments
(e.g., Microsoft Access) that help build ad hoc SQL queries
by “ pointing-and-clicking” . Finally, there are a variety of
data mining tools that are often used as front end tools to data
warehouses.

5. Database Design Methodology
