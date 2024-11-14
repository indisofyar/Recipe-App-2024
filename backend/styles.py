from typing import List


def create_paragraph(text: str) -> str:
    para = '<p style="Margin:0;font-size:16px;font-family:arial,helvetica,sans-serif;line-height:24px;color:#000000">'
    para += text
    para += '</p><br>'
    return para


def create_table(headings: List[str], rows: List[List[str]]) -> str:
    header_html = "<tr>"
    for header in headings:
        header_html += f'<th>{header}</th>'
    header_html += '</tr>'

    rows_html = ''
    for row in rows:
        rows_html += "<tr>"
        for cell_data in row:
            rows_html += f'<td>{cell_data}</td>'
        rows_html += '</tr>'

    table = f"""<table style="border-collapse: collapse; width: 100%;">
        {header_html}
        {rows_html}
    </table>"""

    return table


output = create_table(
    headings=['Heading One', 'Heading Two'],
    rows=[
        ['Row Data One', 'Row Data Two'],
        ['Row Data Three', 'Row Data Four']
    ]
)

# This outputs:
# <table style="border-collapse: collapse; width: 100%;">
#         <tr><th>Heading One</th><th>Heading Two</th></tr>
#         <tr><td>Row Data One</td><td>Row Data Two</td></tr><tr><td>Row Data Three</td><td>Row Data Four</td></tr>
#     </table>

