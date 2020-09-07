" Enable true colors if available
set termguicolors
colorscheme gruvbox

" Fix transparent background in Vim / Neovim
" (necessary for alacritty to use a transparent bg)
hi! Normal ctermbg=NONE guibg=NONE 
hi! NonText ctermbg=NONE guibg=NONE guifg=NONE ctermfg=NONE 

" Enable italics, Make sure this is immediately after colorscheme
" https://stackoverflow.com/questions/3494435/vimrc-make-comments-italic
highlight Comment cterm=italic gui=italic
