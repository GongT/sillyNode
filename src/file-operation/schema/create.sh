#!/usr/bin/env bash

set -x

D="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"

dtsgen -o "${D}/packagejson.d.ts" --url http://json.schemastore.org/package
dtsgen -o "${D}/tslint.d.ts" --url http://json.schemastore.org/tslint
dtsgen -o "${D}/tsconfig.d.ts" --url http://json.schemastore.org/tsconfig
dtsgen -o "${D}/eslint.d.ts" --url http://json.schemastore.org/eslintrc
dtsgen -o "${D}/babelrc.d.ts" --url http://json.schemastore.org/babelrc

