#!/bin/bash
echo "********** Trusting connections **********"
echo "local all all  trust" > /var/lib/postgresql/data/pg_hba.conf
echo "host all all all trust" >> /var/lib/postgresql/data/pg_hba.conf
