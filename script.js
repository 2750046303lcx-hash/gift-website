// 分类筛选
const cateButtons = document.querySelectorAll('.cate-btn');
const productCards = document.querySelectorAll('.product-card');

cateButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // 切换激活状态
        cateButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        
        productCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 搜索功能
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    
    productCards.forEach(card => {
        const productName = card.dataset.name.toLowerCase();
        if (productName.includes(keyword)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // 搜索时重置分类按钮
    cateButtons.forEach(b => b.classList.remove('active'));
    cateButtons[0].classList.add('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
