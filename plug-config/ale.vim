" set your plugging manager
let g:ale_linters = {
\   'javascript': ['eslint'],
\   'typescript': ['eslint']
\}

" pimp your linter symbols
let g:ale_sign_error = '❌'
let g:ale_sign_warning = '⚠️'

let g:ale_fixers = {
\     'javascript': ['eslint'],
\     'typescript': ['prettier'],
\     'scss': ['prettier'],
\     'html': ['prettier']
\}
" add config to fix the file your are working on on save
let g:ale_fix_on_save = 1
