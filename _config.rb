# Remove const to avoid
# warning: already initialized constant FORMAT_NAMES
#
# only remove if it's defined.
# constant Gollum::Page::FORMAT_NAMES not defined (NameError)
Gollum::Page.send :remove_const, :FORMAT_NAMES if defined? Gollum::Page::FORMAT_NAMES

# limit to one format
Precious::App.set(:wiki_options, {:readonly => true})
# limit to one format
Gollum::Page::FORMAT_NAMES = { :markdown  => "Markdown" }
