<!-- Source externe (hors supports du cours ISI7), ajoutée le 2026-11-14 (docs/06 §9.6).
Référence : M. Armbrust, A. Ghodsi, R. Xin, M. Zaharia, « Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics », CIDR 2021 (licence CC BY 3.0).
URL : https://www.databricks.com/wp-content/uploads/2020/12/cidr_lakehouse.pdf (version de CIDR 2021 : https://vldb.org/cidrdb/2021/) — consulté le 2026-11-14. Extraits copiés tels quels (pdftotext, ordre de lecture). Les auteurs travaillent chez Databricks : article de position. -->

# Armbrust et al. (2021) — extraits

## Résumé et introduction

Lakehouse: A New Generation of Open Platforms that Unify
Data Warehousing and Advanced Analytics
Michael Armbrust1 , Ali Ghodsi1,2 , Reynold Xin1 , Matei Zaharia1,3
1 Databricks, 2 UC Berkeley, 3 Stanford University

Abstract
This paper argues that the data warehouse architecture as we know
it today will wither in the coming years and be replaced by a new
architectural pattern, the Lakehouse, which will (i) be based on open
direct-access data formats, such as Apache Parquet, (ii) have firstclass support for machine learning and data science, and (iii) offer
state-of-the-art performance. Lakehouses can help address several
major challenges with data warehouses, including data staleness,
reliability, total cost of ownership, data lock-in, and limited use-case
support. We discuss how the industry is already moving toward
Lakehouses and how this shift may affect work in data management.
We also report results from a Lakehouse system using Parquet that
is competitive with popular cloud data warehouses on TPC-DS.

1

Introduction

This paper argues that the data warehouse architecture as we know
it today will wane in the coming years and be replaced by a new
architectural pattern, which we refer to as the Lakehouse, characterized by (i) open direct-access data formats, such as Apache
Parquet and ORC, (ii) first-class support for machine learning and
data science workloads, and (iii) state-of-the-art performance.
The history of data warehousing started with helping business
leaders get analytical insights by collecting data from operational
databases into centralized warehouses, which then could be used
for decision support and business intelligence (BI). Data in these
warehouses would be written with schema-on-write, which ensured
that the data model was optimized for downstream BI consumption.
We refer to this as the first generation data analytics platforms.
A decade ago, the first generation systems started to face several
challenges. First, they typically coupled compute and storage into an
on-premises appliance. This forced enterprises to provision and pay
for the peak of user load and data under management, which became
very costly as datasets grew. Second, not only were datasets growing
rapidly, but more and more datasets were completely unstructured,
e.g., video, audio, and text documents, which data warehouses could
not store and query at all.
To solve these problems, the second generation data analytics
platforms started offloading all the raw data into data lakes: low-cost
storage systems with a file API that hold data in generic and usually
open file formats, such as Apache Parquet and ORC [8, 9]. This
approach started with the Apache Hadoop movement [5], using the
Hadoop File System (HDFS) for cheap storage. The data lake was a
schema-on-read architecture that enabled the agility of storing any
data at low cost, but on the other hand, punted the problem of data
This article is published under the Creative Commons Attribution License
(http://creativecommons.org/licenses/by/3.0/). 11th Annual Conference on Innovative
Data Systems Research (CIDR ’21), January 11–15, 2021, Online.

quality and governance downstream. In this architecture, a small
subset of data in the lake would later be ETLed to a downstream
data warehouse (such as Teradata) for the most important decision
support and BI applications. The use of open formats also made
data lake data directly accessible to a wide range of other analytics
engines, such as machine learning systems [30, 37, 42].
From 2015 onwards, cloud data lakes, such as S3, ADLS and GCS,
started replacing HDFS. They have superior durability (often >10
nines), geo-replication, and most importantly, extremely low cost
with the possibility of automatic, even cheaper, archival storage,
e.g., AWS Glacier. The rest of the architecture is largely the same in
the cloud as in the second generation systems, with a downstream
data warehouse such as Redshift or Snowflake. This two-tier data
lake + warehouse architecture is now dominant in the industry in
our experience (used at virtually all Fortune 500 enterprises).
This brings us to the challenges with current data architectures.
While the cloud data lake and warehouse architecture is ostensibly
cheap due to separate storage (e.g., S3) and compute (e.g., Redshift),
a two-tier architecture is highly complex for users. In the first generation platforms, all data was ETLed from operational data systems
directly into a warehouse. In today’s architectures, data is first
ETLed into lakes, and then again ELTed into warehouses, creating
complexity, delays, and new failure modes. Moreover, enterprise
use cases now include advanced analytics such as machine learning,
for which neither data lakes nor warehouses are ideal. Specifically,
today’s data architectures commonly suffer from four problems:
Reliability. Keeping the data lake and warehouse consistent is
difficult and costly. Continuous engineering is required to ETL data
between the two systems and make it available to high-performance
decision support and BI. Each ETL step also risks incurring failures
or introducing bugs that reduce data quality, e.g., due to subtle
differences between the data lake and warehouse engines.
Data staleness. The data in the warehouse is stale compared to
that of the data lake, with new data frequently taking days to load.
This is a step back compared to the first generation of analytics
systems, where new operational data was immediately available for
queries. According to a survey by Dimensional Research and Fivetran, 86% of analysts use out-of-date data and 62% report waiting
on engineering resources numerous times per month [47].
Limited support for advanced analytics. Businesses want to
ask predictive questions using their warehousing data, e.g., “which
customers should I offer discounts to?” Despite much research on
the confluence of ML and data management, none of the leading machine learning systems, such as TensorFlow, PyTorch and XGBoost,
work well on top of warehouses. Unlike BI queries, which extract a
small amount of data, these systems need to process large datasets
using complex non-SQL code. Reading this data via ODBC/JDBC
is inefficient, and there is no way to directly access the internal

CIDR ’21, Jan. 2021, Online

BI

Reports

Michael Armbrust, Ali Ghodsi, Reynold Xin, and Matei Zaharia

BI

Reports

Data
Science

Machine
Learning

BI

Reports

Data
Science

Machine
Learning

Data Warehouses

Data Warehouses

ETL

Metadata, Caching, and
Indexing Layer

ETL

ETL

Data Lake

Data Lake

Structured Data

Structured, Semi-structured & Unstructured Data

Structured, Semi-structured & Unstructured Data

(a) First-generation platforms.

(b) Current two-tier architectures.

(c) Lakehouse platforms.

Figure 1: Evolution of data platform architectures to today’s two-tier model (a-b) and the new Lakehouse model (c).
warehouse proprietary formats. For these use cases, warehouse
vendors recommend exporting data to files, which further increases
complexity and staleness (adding a third ETL step!). Alternatively,
users can run these systems against data lake data in open formats.
However, they then lose rich management features from data warehouses, such as ACID transactions, data versioning and indexing.
Total cost of ownership. Apart from paying for continuous ETL,
users pay double the storage cost for data copied to a warehouse,
and commercial warehouses lock data into proprietary formats that
increase the cost of migrating data or workloads to other systems.
A straw-man solution that has had limited adoption is to eliminate the data lake altogether and store all the data in a warehouse
that has built-in separation of compute and storage. We will argue
that this has limited viability, as evidenced by lack of adoption, because it still doesn’t support managing video/audio/text data easily
or fast direct access from ML and data science workloads.
In this paper, we discuss the following technical question: is it
possible to turn data lakes based on standard open data formats,
such as Parquet and ORC, into high-performance systems that can
provide both the performance and management features of data
warehouses and fast, direct I/O from advanced analytics workloads?
We argue that this type of system design, which we refer to as a
Lakehouse (Fig. 1), is both feasible and is already showing evidence
of success, in various forms, in the industry. As more business applications start relying on operational data and on advanced analytics,
we believe the Lakehouse is a compelling design point that can

## The Lakehouse architecture

CIDR ’21, Jan. 2021, Online

The Lakehouse Architecture

We define a Lakehouse as a data management system based on lowcost and directly-accessible storage that also provides traditional
analytical DBMS management and performance features such as
ACID transactions, data versioning, auditing, indexing, caching,
and query optimization. Lakehouses thus combine the key benefits
of data lakes and data warehouses: low-cost storage in an open
format accessible by a variety of systems from the former, and
powerful management and optimization features from the latter.
The key question is whether one can combine these benefits in an
effective way: in particular, Lakehouses’ support for direct access
means that they give up some aspects of data independence, which
has been a cornerstone of relational DBMS design.
We note that Lakehouses are an especially good fit for cloud environments with separate compute and storage: different computing
applications can run on-demand on completely separate computing
nodes (e.g., a GPU cluster for ML) while directly accessing the same
storage data. However, one could also implement a Lakehouse over
an on-premise storage system such as HDFS.
In this section, we sketch one possible design for Lakehouse
systems, based on three recent technical ideas that have appeared
in various forms throughout the industry. We have been building
towards a Lakehouse platform based on this design at Databricks
through the Delta Lake, Delta Engine and Databricks ML Runtime
projects [10, 19, 38]. Other designs may also be viable, however, as
are other concrete technical choices in our high-level design (e.g.,
our stack at Databricks currently builds on the Parquet storage
format, but it is possible to design a better format). We discuss
several alternatives and future directions for research.
3.1

Implementing a Lakehouse System

The first key idea we propose for implementing a Lakehouse is to
have the system store data in a low-cost object store (e.g., Amazon
S3) using a standard file format such as Apache Parquet, but implement a transactional metadata layer on top of the object store that
defines which objects are part of a table version. This allows the
system to implement management features such as ACID transactions or versioning within the metadata layer, while keeping the
bulk of the data in the low-cost object store and allowing clients to
directly read objects from this store using a standard file format in
most cases. Several recent systems, including Delta Lake [10] and
Apache Iceberg [7] have successfully added management features
to data lakes in this fashion; for example, Delta Lake is now used
in about half of Databricks’ workload, by thousands of customers.
Although a metadata layer adds management capabilities, it is
not sufficient to achieve good SQL performance. Data warehouses
use several techniques to get state-of-the-art performance, such as
storing hot data on fast devices such as SSDs, maintaining statistics,
building efficient access methods such as indexes, and co-optimizing
the data format and compute engine. In a Lakehouse based on existing storage formats, it is not possible to change the format, but we
show that it is possible to implement other optimizations that leave
the data files unchanged, including caching, auxiliary data structures
such as indexes and statistics, and data layout optimizations.
Finally, Lakehouses can both speed up advanced analytics workloads and give them better data management features thanks to

CIDR ’21, Jan. 2021, Online

BI

Reports
SQL APIs

Michael Armbrust, Ali Ghodsi, Reynold Xin, and Matei Zaharia

Data
