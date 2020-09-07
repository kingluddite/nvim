" -----------------------------------------------------------------------------
" Basic Settings
"   Research any of these by running :help <setting>
" -----------------------------------------------------------------------------

" set leader key
let g:mapleader = "\<Space>"

set iskeyword+=-                      	" treat dash separated words as a word text object"
set formatoptions-=cro                  " Stop newline continution of comments

syntax enable                           " Enables syntax highlighing
set hidden                              " Required to keep multiple buffers open multiple buffers
set nowrap                              " Display long lines as just one line
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
set number                              " Line numbers
set cursorline                          " Enable highlighting of the current line
set background=dark                     " tell vim what the background color looks like
set showtabline=2                       " Always show tabs
set noshowmode                          " We don't need to see things like -- INSERT -- anymore
set nobackup                            " This is recommended by coc
set nowritebackup                       " This is recommended by coc
set updatetime=300                      " Faster completion
set timeoutlen=500                      " By default timeoutlen is 1000 ms
set formatoptions-=cro                  " Stop newline continution of comments
set clipboard=unnamedplus               " Copy paste between vim and everything else

"set autochdir                           " Your working directory will always be the same as your working directory
" set autoindent             " auto-indent
" set bg=dark
" set backspace=indent,eol,start
" set backup                 " create backups
" set backupdir=/tmp         " tell vim where to put its backup files
" set clipboard=unnamed " set clipboard to easily copy from vim and paste into OSx
" set dir=/tmp               " tell vim where to put swap files
" set foldcolumn=1           " Add a bit extra margin to the left
" set foldmethod=indent      " Code fold bliss
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
" set showcmd
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

au! BufWritePost $MYVIMRC source %      " auto source when writing to init.vm alternatively you can run :source $MYVIMRC

" You can't stop me
cmap w!! w !sudo tee % 
