
function showPage(pageId) {
    ['painel', 'lancamentos', 'estoque', 'historico', 'relatorios'].forEach(id => {
        document.getElementById(id).style.display = (id === pageId) ? 'block' : 'none';
    });
}
