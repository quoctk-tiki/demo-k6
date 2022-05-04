#!/usr/bin/env zsh
k6 run --address "localhost:6500" --out statsd ./scripts/warehouse.js &
k6 run --address "localhost:6501" --out statsd ./scripts/location.js