# Ticketing System Application API v0.0.1

## TOOLS

storage:

    - postgres
    - MySQL / MariaDb
    - mogodb : NoSQL
    - firebase: NoSQL
    - MS SQL
    - Oracle SQL
    - Hibername
    - supabase: NoSQL
    - cocroachDB
    - Redis - queuing systems

schema

    relationships
        - one to many
        - many to many
    data types
        - Strings
        - Integers
        - Json - key value pairs = {key: "", key: [], key: {}, key: 1}
        - arrays - []
        - DateTime - ISO, UTC
        - Custom data type 
frameworks/libraries/language:
    prisma - ORM: Object relational mapper, TyORM : nestJs (mongodb, postgress, mysql, maria, cockroachDB)
    nodejs -
    typescript -
    graphql/apollo-server 4 -
    python
    java
    cucumber + playwright - PMT and Testing tools
    Gherkin - BDD language

## Requirements

You are required to create a ticketig system for tshwane municipality to track service delivery in the sorounding areas. as a backend team you job is to create an api for the system. identify the best solution to e implemented for the API.

Scenarios: USER

    a user needs to login to create/ log a ticket - if a ticket exists they should be able to upvote
    gets notified by email of sms when a ticket is in progress or has been resolved
    should also be able check updates 
    view other tickets loged in the area
    follow up on the ticket status - speak to call center agent 
    verify completion of a task or resolution of a ticket.

Scenario: Tickets

    belong to a department
    they can have priorities (low,medium,high,urgent)
    status updates 
    ticket can expire and when it expires the department will have to be held accountable.
    verification of ticket resolution using OTP or QR codes etc.

Scenario: Department

    employees and admins  to login
    auto assignment of tickets
    ticket assignment overide by responsible personel (someone having an admin role)
    pick tickets and resolve them
    promote or transfer tickets to another dep or stage.
    rewarded for the most resolved tickets / punished for the delay or failure to resolve tickets
    report on all logged tickets (monthly - yearly)

Behavioural Driven Development (BDD).

cucumber + playwright









