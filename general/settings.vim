" -----------------------------------------------------------------------------
" Basic Settings
"   Research any of these by running :help <setting>
" -----------------------------------------------------------------------------

" set leader key
let g:mapleader = ","
set iskeyword+=-                      	" treat dash separated words as a word text object"

set formatoptions-=cro " Stop newline continution of comments

syntax enable                           " Enables syntax highlighing
set showcmd
set hidden                              " Required to keep multiple buffers open multiple buffers

" Word Wrap Stuff
" set nowrap                             " Display long lines as just one line
set wrap
" only want line breaks inserted when you explicitly press the Enter key
set linebreak
" prevent vim from automatically inserting line breaks in newly entered text
set textwidth=0
set wrapmargin=0
" keep existing 'textwidth' settings for most lines in your file 
" but not have vim automatically reformat when typing on existing lines 
set formatoptions-=t

set encoding=utf-8                      " The encoding displayed
set pumheight=10                        " Makes popup menu smaller
set fileencoding=utf-8                  " The encoding written to file
set ruler              			            " Show the cursor position all the time
set cmdheight=2                         " More space for displaying messages
set iskeyword+=-                      	" treat dash separated words as a word text object"
set mouse=a                            " Enable your mouse
set splitbelow                          " Horizontal splits will automatically be below
set splitright                          " Vertical splits will automatically be to the right
set t_Co=256                            " Support 256 colors
set conceallevel=0                      " So that I can see `` in markdown files
set tabstop=2                           " Insert 2 spaces for a tab
set shiftwidth=2                        " Change the number of space characters inserted for indentation
set smarttab                            " Makes tabbing smarter will realize you have 2 vs 4
set expandtab                           " Converts tabs to spaces
set smartindent                         " Makes indenting smart
set autoindent                          " Good auto indent
set laststatus=0                        " Always display the status line
set number                              " Use relativenumber for all lines except the current line.
set relativenumber                      " See above comment 
set cursorline                          " Enable highlighting of the current line
set background=dark                     " tell vim what the background color looks like
set showtabline=2                       " Always show tabs
set noshowmode                          " We don't need to see things like -- INSERT -- anymore
set nobackup                            " This is recommended by coc
set nowritebackup                       " This is recommended by coc
set updatetime=300                      " Faster completion
" https://www.johnhawthorn.com/2012/09/vi-escape-delays/
set timeoutlen=500                      " By default timeoutlen is 1000 ms
set ttimeoutlen=0          " https://stackoverflow.com/questions/37644682/why-is-vim-so-slow/37645334
set formatoptions-=cro                  " Stop newline continution of comments
set clipboard=unnamedplus               " Copy paste between vim and everything else
" vim was supper slow and then added below line
" vim persistent undo
" https://jovicailic.org/2017/04/vim-persistent-undo/
set undofile " Maintain undo history between sessions
set undodir=~/.config/nvim/undodir
"set autochdir                           " Your working directory will always be the same as your working directory
" set autoindent             " auto-indent
" set bg=dark
" set backspace=indent,eol,start
" set backup                 " create backups
" set backupdir=/tmp         " tell vim where to put its backup files
" set clipboard=unnamed " set clipboard to easily copy from vim and paste into OSx
" set dir=/tmp               " tell vim where to put swap files
" -- FOLDING -- (https://medium.com/vim-drops/javascript-folding-on-vim-119c70d2e872)
 set foldmethod=indent "syntax highlighting items specify folds"
 set foldnestmax=10
 set nofoldenable
 set foldlevel=2
 set foldcolumn=1 "defines 1 col at window left, to indicate folding"
 let javaScript_fold=1 "activate folding by JS syntax"
 set foldlevelstart=99 "start file will all folds opened"
 " use ripgrep instead of grep
 set grepprg=rg\ --vimgrep\ --smart-case\ --follow
" set formatoptions=tcqrn1
" set expandtab              " use spaces instead of tabs
" set history=1000           " Keep 1000 items in the history
" set hlsearch
" let html_no_rendering=1 
" set ignorecase  " Make searches case-insensitive
" set incsearch   " But do highlight as you type your search
" set laststatus=2    " last window always has a status line
" set lbr                    " makes for an easier to read line wrap
" let loaded_matchparen=1 
" set matchpairs+=<:> " use % to jump between pairs
" set modelines=0
" set nohlsearch             " Don't continue to highlight seached phrases
" set noshowmatch            " Don't match parentheses/brackets
" set nocursorline           " Don't paint cursor line
" set nocursorcolumn         " Don't paint cursor column
" set noshiftround           " always indent/outdent to the nearest tabstop
" set number relativenumber
" set scrolljump=8           " Scroll 8 lines at a time at bottom/top
" set showmatch
" set si                     " Smart indent
" set shiftwidth=2   " indent/outdent by 2 columns
" set showmode
" set softtabstop=2  " unify
" set smartcase
" set smarttab               " use tabs at the start of a line, spaces elsewhere
" set scrolloff=5
" set shiftwidth=2           " 1 tab == 2 spaces
" set t_Co=256               " enable 256-color mode
" set t_vb=
" set tabstop=2              " tab spacing
" set term=xterm-256color
" set termencoding=utf-8"
" set textwidth=79
" set timeoutlen=1000        " speed vim up
" set ttimeoutlen=0          " https://stackoverflow.com/questions/37644682/why-is-vim-so-slow/37645334
" set ttyfast                " Rendering
" set tw=500
" set visualbell             " Blink cursor on error instead of beeping (grr)
" set wildmenu               " shows a menu when using tab completion
" set wildmode=full
" set wildignore+=*/tmp/*,/dist/* " wildignore limits searches
" set wildignore+=/node_modules/*,*.so,*.swp,*.zip
" set wildignore+=*.bmp,*.gif,*.ico,*.jpg,*.png
" set wildignore+=.DS_Store,.git,.hg,.svn
" set wildignore+=*~,*.swp,*.swo,*.tmp
" set wrap                   
" set runtimepath^=~/.vim/bundle.ctrlp.vim " fuzzy search

" instead of man pages open google search 
set keywordprg=google

" The following command a comment character will not be automatically inserted in the next line under any situation
autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions-=o
au! BufWritePost $MYVIMRC source %      " auto source when writing to init.vm alternatively you can run :source $MYVIMRC
" Formatting
autocmd FileType typescript setlocal formatprg=prettier\ --parser\ typescript
" You can't stop me
cmap w!! w !sudo tee % 
