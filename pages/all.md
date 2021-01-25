# All Pages

<section>
  <table>
    <thead><tr>
      <th data-sort-default>Name</th>
      <th class="text-end">Length (bytes)</th>
      <th class="text-center">History</th>
    </tr></thead>
    <tbody></tbody>
  </table>
</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/tablesort/5.2.1/tablesort.min.js"></script>
<script>
  let tbody = document.querySelector('tbody');
  fetch('https://api.github.com/repos/aaboyles/aaboyles.github.io/contents/pages').then(r => r.json()).then(d => {
    let files = d.filter(file => file.name.substring(file.name.length - 3) == '.md');
    files.forEach(file => {
      let tr = document.createElement('tr');
      tr.innerHTML = `
      <td><a href="?q=${file.path}">${titleize(file.name)}</a></td>
      <td class="text-end" data-sort="${file.size}">${file.size.toLocaleString()}</td>
      <td class="text-center"><a href="${file.html_url.replace('blob', 'commits')}">History</a>`;
      tbody.append(tr);
    });
  });

  function titleize(str){
    let output = str
      .substring(0, str.length - 3)
      .split('-')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ');
    return output;
  }

  new Tablesort(document.querySelector('table'));
</script>
