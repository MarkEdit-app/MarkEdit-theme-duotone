/**
 * Styles for the MarkEdit-preview pane (`.markdown-body`), so the preview
 * matches the DuoTone editor theme. It's a no-op when the preview
 * extension is not installed.
 *
 * Palette: @uiw/codemirror-theme-duotone (DuoTone Light / DuoTone Dark).
 */
export const previewStyles = `
@media (prefers-color-scheme: light) {
  .markdown-body {
    background: #faf8f5 !important;
    color: #2d2006 !important;
  }
  .markdown-body h1, .markdown-body h2, .markdown-body h3,
  .markdown-body h4, .markdown-body h5, .markdown-body h6 {
    color: #2d2006 !important;
    border-bottom-color: #e3dcce !important;
  }
  .markdown-body a { color: #1659df !important; }
  .markdown-body blockquote {
    color: #b29762 !important;
    border-left-color: #e3dcce !important;
  }
  .markdown-body code, .markdown-body tt {
    color: #896724 !important;
    background: #ddceb154 !important;
  }
  .markdown-body pre { background: #f3efe7 !important; }
  .markdown-body pre code { color: #2d2006 !important; background: transparent !important; }
  .markdown-body hr { background: #e3dcce !important; }
  .markdown-body table th, .markdown-body table td { border-color: #e3dcce !important; }
  .markdown-body table th { background: #f3efe7 !important; }
  .markdown-body table tr { background: #faf8f5 !important; }
  .markdown-body table tr:nth-child(2n) { background: #f3efe7 !important; }
}

@media (prefers-color-scheme: dark) {
  .markdown-body {
    background: #2a2734 !important;
    color: #eeebff !important;
  }
  .markdown-body h1, .markdown-body h2, .markdown-body h3,
  .markdown-body h4, .markdown-body h5, .markdown-body h6 {
    color: #eeebff !important;
    border-bottom-color: #545167 !important;
  }
  .markdown-body a { color: #9a86fd !important; }
  .markdown-body blockquote {
    color: #6c6783 !important;
    border-left-color: #545167 !important;
  }
  .markdown-body code, .markdown-body tt {
    color: #ffb870 !important;
    background: #36334280 !important;
  }
  .markdown-body pre { background: #363342 !important; }
  .markdown-body pre code { color: #eeebff !important; background: transparent !important; }
  .markdown-body hr { background: #545167 !important; }
  .markdown-body table th, .markdown-body table td { border-color: #545167 !important; }
  .markdown-body table th { background: #363342 !important; }
  .markdown-body table tr { background: #2a2734 !important; }
  .markdown-body table tr:nth-child(2n) { background: #363342 !important; }
}
`;
