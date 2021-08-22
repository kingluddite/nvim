" auto-install vim-plug
if empty(glob('~/.config/nvim/autoload/plug.vim'))
  silent !curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  "autocmd VimEnter * PlugInstall
  "autocmd VimEnter * PlugInstall | source $MYVIMRC
endif

" Keep Plugin commands between plug#begin/end.
call plug#begin('~/.config/nvim/autoload/plugged')

    " Better Syntax Support
    Plug 'sheerun/vim-polyglot'
    "navigate seamlessly between vim and tmux splits using a consistent set of hotkeys
    Plug 'christoomey/vim-tmux-navigator'    " File Explorer
    " Navigate and manipulate files in a tree view.
    Plug 'scrooloose/nerdtree', { 'on': 'NERDTreeToggle' }
    " Auto pairs for '(' '[' '{'
    Plug 'jiangmiao/auto-pairs'
    " Multi Cursors
    Plug 'mg979/vim-visual-multi', {'branch': 'master'}
    Plug 'mattn/emmet-vim'
    " Cool Icons
    Plug 'kyazdani42/nvim-web-devicons'
    Plug 'ryanoasis/vim-devicons'
    " Themes
    Plug 'morhetz/gruvbox'
    Plug 'herringtondarkholme/yats.vim'
    " Plug 'joshdick/onedark.vim'
    " Plug 'arcticicestudio/nord-vim'
    " plugins I like
    Plug 'mhinz/vim-startify'
    " Status Line
    Plug 'vim-airline/vim-airline'
    Plug 'vim-airline/vim-airline-themes'
    " Intellisense
    Plug 'neoclide/coc.nvim', {'branch': 'release'}
    " es7-react-js-snippets for coc
    Plug 'dsznajder/vscode-es7-javascript-react-snippets', { 'do': 'yarn install --frozen-lockfile && yarn compile' }
    " Plug 'kevinhwang91/rnvimr', {'do': 'make sync'}
    " FZF
    Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
    Plug 'junegunn/fzf.vim'
    Plug 'airblade/vim-rooter'
    " Colors
    "
    Plug 'norcalli/nvim-colorizer.lua' 
    " Make nvim cool on startup
    Plug 'mhinz/vim-startify'
    " Jump to any location specified by two characters
    Plug 'justinmk/vim-sneak'
    " Easy comments
    Plug 'tomtom/tcomment_vim'
    " Snippets
    Plug 'honza/vim-snippets'
    " vim port of emacs-which-key that displays available keybindings in popup
    Plug 'liuchengxu/vim-which-key'
    Plug 'mhinz/vim-signify'
    Plug 'tpope/vim-fugitive'
    Plug 'tpope/vim-rhubarb'
    Plug 'junegunn/gv.vim'
    Plug 'unblevable/quick-scope' 
    " floating terminal for neovim
    Plug 'voldikss/vim-floaterm'
    " Writing Screenplays
    Plug 'kblin/vim-fountain'
    " Autoformat for ESLint and prettier
    Plug 'w0rp/ale'
    Plug 'iamcco/markdown-preview.nvim', { 'do': 'cd app & yarn install' }
    "Dim paragraphs above and below the active paragraph.
    Plug 'junegunn/limelight.vim'
    " Distraction free writing by removing UI elements and centering everything.
    Plug 'junegunn/goyo.vim'
    Plug 'tpope/vim-surround'
    " Closetags
    Plug 'alvan/vim-closetag'    " Fancy start screen with vim
    " Auto change html tags
    Plug 'AndrewRadev/tagalong.vim'    " Integrate fzf with Vim.
    Plug 'styled-components/vim-styled-components', { 'branch': 'main' }
    " Makes writing notes easy
    Plug 'vimwiki/vimwiki'
    " Plug 'tbabej/taskwiki'
    Plug 'plasticboy/vim-markdown'
    Plug 'tpope/vim-projectionist'
    " Plug '/usr/local/opt/fzf' " installed via homebrew
    " Automatically clear search highlights after you move your cursor.
    " Plug 'haya14busa/is.vim'
    " Plug 'mitermayer/vim-prettier'
    " Modify * to also work with visual selections.
    " Plug 'nelstrom/vim-visual-star-search'
    " Handle multi-file find and replace.
    " Plug 'mhinz/vim-grepper'
    " Surround text with quotes, parenthesis, brackets, and more.
    " Plug 'easymotion/vim-easymotion'
    " Plug 'tomtom/tcomment_vim'
    " Plug 'ctrlpvim/ctrlp.vim'
    " Plug 'gioele/vim-autoswap'
    " React code snippets
    " Plug 'mxw/vim-jsx'

" Plugin Graveyard
" Plug 'prettier/prettier'
" Plug 'tyru/open-browser.vim'
" Plug 'ervandew/supertab' " Must load before youcompleteme
" Plug 'tpope/vim-fugitive'
" Plug 'airblade/vim-gitgutter' (super slow!)
" Plug 'chemzqm/vim-jsx-improve' " jsx support
" Plug 'marijnh/tern_for_vim'
" Plug 'valloric/youcompleteme'
" Plug 'tacahiroy/ctrlp-funky'
" Plug 'dsimidzija/vim-nerdtree-ignore'
" Plug 'ryanoasis/vim-devicons'
" Navigate and manipulate files in a tree view.
"Plug 'scrooloose/nerdtree', { 'on': 'NERDTreeToggle' }
" Plug 'ap/vim-css-color'
" Plug 'chip/vim-fat-finger'
" Plug 'zirrostig/vim-schlepp'
" React code snippets
" ES2015 code snippets 
" Plug 'epilande/vim-es2015-snippets'
" Plug 'kewah/vim-stylefmt'    
" Plug 'sirver/ultisnips'
" Plug 'epilande/vim-react-snippets'

" Languages and file types.
" Plug 'cakebaker/scss-syntax.vim'
" Plug 'chrisbra/csv.vim'
" Plug 'ekalinin/dockerfile.vim'
" Plug 'elzr/vim-json'
" Plug 'lifepillar/pgsql.vim'
" Plug 'othree/html5.vim'
" Plug 'pangloss/vim-javascript'
" Plug 'stephpy/vim-yaml'
" Plug 'tmux-plugins/vim-tmux'
" Plug 'tpope/vim-git'
" Plug 'jparise/vim-graphql'

" All of your Plugins must be added before the following line
call plug#end() 

"" Automatically install missing plugins on startup
autocmd VimEnter *
  \  if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  \|   PlugInstall --sync | q
  \| endif
