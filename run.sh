#!/usr/bin/env zsh

# 1. Please change "example" to "scripts" folder name.
# 2. At "configs > const.js", please use the official "ServiceHost" and declare necessary header params.

for f in example/*; do
  docker-compose run --rm k6 run "/ims-apollo/$f"
done
