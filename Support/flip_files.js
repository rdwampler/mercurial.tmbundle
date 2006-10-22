/* a _very_ basic implementation of flipping
   the visibility of the changed files list.
   
   copyright 2005 torsten becker <torsten.becker@gmail.com>
   no warranty, that it doesn't crash your system.
   you are of course free to modify this.
*/

function didFinishCommand ()
{
   TextMate.isBusy = false;
}

// filename is already shell-escaped, URL is %-escaped
function export_file ( url, rev, filename )
{
   TextMate.isBusy = true;
   TextMate.system("\"${TM_HG:=hg}\" cat -r" + rev + " '" + url + "' &>/tmp/" + filename + " && open -a TextMate /tmp/" + filename, didFinishCommand);
}

/* show: files + hide-button,  hide: show-button.. */
function show_files( base_id )
{
   document.getElementById( base_id ).style.display = 'block';
   document.getElementById( base_id+'_show' ).style.display = 'none';   
   document.getElementById( base_id+'_hide' ).style.display = 'inline';
}

/* hide: files + hide-button,  show: show-button.. */
function hide_files( base_id )
{
   document.getElementById( base_id ).style.display = 'none';
   document.getElementById( base_id+'_show' ).style.display = 'inline';   
   document.getElementById( base_id+'_hide' ).style.display = 'none';
}

/* show: desc + hide-button,  hide: show-button.. */
function show_desc( base_id )
{
  document.getElementById( base_id+'_short' ).style.display = 'none';
  document.getElementById( base_id+'_long' ).style.display = 'block';
   document.getElementById( base_id+'_show' ).style.display = 'none';   
   document.getElementById( base_id+'_hide' ).style.display = 'inline';
}

/* hide: desc + hide-button,  show: show-button.. */
function hide_desc( base_id )
{
   document.getElementById( base_id+'_long' ).style.display = 'none';
   document.getElementById( base_id+'_short' ).style.display = 'block';
   document.getElementById( base_id+'_show' ).style.display = 'inline';   
   document.getElementById( base_id+'_hide' ).style.display = 'none';
}
