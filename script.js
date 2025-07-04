document.addEventListener('DOMContentLoaded', () => {

    // --- DATA (DATABASE SIMULATION - Updated to use localStorage) ---
    // Khởi tạo products từ localStorage hoặc dùng dữ liệu mặc định nếu chưa có
    let products = JSON.parse(localStorage.getItem('myStoreProducts')) || [
        {
            id: 1,
            name: 'Áo Thun Basic Cotton',
            price: 250000,
            image: 'hinhanh1.jpg',
            description: 'Sản phẩm không thể thiếu trong tủ đồ. Chất liệu 100% cotton cao cấp, mềm mịn, thấm hút mồ hôi tốt. Form regular fit dễ mặc, dễ phối đồ, mang lại sự thoải mái tối đa cho cả ngày dài năng động.',
            category: 'áo'
        },
        {
            id: 2,
            name: 'Quần Jeans Slimfit Co Giãn',
            price: 550000,
            image: 'hinhanh2.jpg',
            description: 'Dáng quần slimfit hiện đại, ôm vừa vặn giúp tôn lên vóc dáng người mặc. Chất liệu denim cao cấp pha spandex mang lại độ co giãn tuyệt vời, không gây khó chịu khi di chuyển. Màu xanh chàm cổ điển, dễ dàng kết hợp với áo thun, sơ mi.',
            category: 'quần'
        },
        {
            id: 3,
            name: 'Mũ Lưỡi Trai Phong Cách',
            price: 150000,
            image: 'hinhanh3.jpg',
            description: 'Phụ kiện hoàn hảo cho phong cách đường phố. Chất liệu vải kaki dày dặn, đứng form. Phía sau có khóa điều chỉnh kim loại chắc chắn, phù hợp với mọi kích cỡ vòng đầu. Logo thêu nổi bật, sắc nét.',
            category: 'phụ kiện'
        },
        {    id: 4,
            name: 'Áo Sơ Mi Oxford Dài Tay',
            price: 450000,
            image: 'hinhanh4.jpg',
            description: 'Lựa chọn hàng đầu cho vẻ ngoài lịch lãm. Vải Oxford nhập khẩu, bề mặt vải đặc trưng, ít nhăn và giữ form tốt sau nhiều lần giặt. Cổ áo button-down cổ điển, có thể mặc đi làm, đi chơi hoặc các sự kiện quan trọng.',
            category: 'áo'
        },
        {
            id: 5,
            name: 'Quần Short Kaki Túi Hộp',
            price: 320000,
            image: 'hinhanh5.jpg',
            description: 'Thiết kế năng động, trẻ trung với các túi hộp tiện lợi. Chất vải kaki đã qua xử lý wash mềm, tạo cảm giác thoải mái khi mặc. Đường may tỉ mỉ, chắc chắn, phù hợp cho các hoạt động ngoài trời hay dạo phố.',
            category: 'quần'
        },
        {
            id: 6,
            name: 'Thắt Lưng Da Bò Thật',
            price: 280000,
            image: 'hinhanh6.jpg',
            description: 'Được làm từ 100% da bò nguyên miếng, bền bỉ theo thời gian. Bề mặt da mềm mại, càng dùng càng bóng đẹp. Đầu khóa kim loại đúc nguyên khối, mạ tĩnh điện chống gỉ, thể hiện sự sang trọng và đẳng cấp.',
            category: 'phụ kiện'
        },
        {    id: 7,
            name: 'Áo Khoác Bomber Kaki',
            price: 680000,
            image: 'hinhanh7.jpg',
            description: 'Mẫu áo khoác bomber đa năng, vừa thời trang vừa có khả năng cản gió tốt. Lớp ngoài là vải kaki cao cấp, bên trong lót vải dù thoáng khí. Bo tay và gấu áo dệt kim co giãn tốt, không bị bai dão.',
            category: 'áo'
        },
        {
            id: 8,
            name: 'Quần Jogger Nỉ Thể Thao',
            price: 380000,
            image: 'hinhanh8.jpg',
            description: 'Sự thoải mái tuyệt đối cho người mặc. Chất liệu nỉ da cá dày dặn, mềm mại, giữ ấm tốt. Form quần rộng rãi, ống bo chun gọn gàng, có dây rút ở lưng quần để điều chỉnh. Thích hợp để tập gym, chạy bộ hoặc mặc ở nhà.',
            category: 'quần'
        },
        {
            id: 9,
            name: 'Balo Canvas Chống Nước',
            price: 590000,
            image: 'hinhanh9.jpg',
            description: 'Người bạn đồng hành đáng tin cậy. Vải canvas được xử lý chống thấm nước nhẹ, bảo vệ đồ đạc bên trong. Ngăn chứa rộng rãi, có ngăn riêng cho laptop 15.6 inch. Quai đeo có đệm mút dày, giảm áp lực lên vai.',
            category: 'phụ kiện'
        },
        {
            id: 10,
            name: 'Áo Hoodie Nỉ Bông Unisex',
            price: 490000,
            image: 'hinhanh10.jpg',
            description: 'Chiếc áo hoodie ấm áp cho mùa đông. Chất nỉ bông dày mịn, giữ nhiệt cực tốt. Mũ áo hai lớp, form rộng rãi, phù hợp cho cả nam và nữ. Túi kangaroo phía trước tiện lợi để giữ ấm tay hoặc đựng đồ nhỏ.',
            category: 'áo'
        },
        {
            id: 11,
            name: 'Kính Mát Gọng Vuông Cổ Điển',
            price: 350000,
            image: 'hinhanh11.jpg',
            description: 'Bảo vệ mắt và nâng tầm phong cách của bạn. Tròng kính Polaroid chống tia UV400, giảm chói hiệu quả. Gọng kính làm từ nhựa Acetate cao cấp, nhẹ và bền. Dáng kính vuông cổ điển không bao giờ lỗi mốt.',
            category: 'phụ kiện'
        }
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Thêm biến để lưu thông tin người dùng đang đăng nhập
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

    // Định nghĩa tài khoản admin
    const ADMIN_USER = {
        username: 'huynhthithuytrang@gmail.com', 
        password: '29112006',
        role: 'admin'
    };

    // --- DOM ELEMENTS ---
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link, .btn[data-page]');
    
    const productListContainer = document.getElementById('product-list');
    const featuredProductsContainer = document.getElementById('featured-products');
    const detailContentContainer = document.getElementById('detail-content');
    
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');

    // Filter elements
    const searchBar = document.getElementById('search-bar');
    const categoryFilter = document.getElementById('category-filter');
    const priceSort = document.getElementById('price-sort');
    const mainSearchInput = document.getElementById('searchInput');

    // Admin elements
    const adminLink = document.getElementById('admin-link');
    const addProductForm = document.getElementById('add-product-form');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const productImageInput = document.getElementById('product-image');
    const productDescriptionInput = document.getElementById('product-description');
    const productCategoryInput = document.getElementById('product-category');
    // THÊM ELEMENT CHO DANH SÁCH QUẢN LÝ
    const adminProductList = document.getElementById('admin-product-list');

    // Hamburger menu (for responsive)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // --- PAGE NAVIGATION ---
    function showPage(pageId, pushState = true) {
        // Kiểm tra quyền truy cập nếu là trang admin
        if (pageId === 'admin-dashboard' && (!currentUser || currentUser.role !== 'admin')) {
            alert('Bạn không có quyền truy cập trang quản trị.');
            showPage('home', false); // Chuyển về trang chủ
            return;
        }

        // Cập nhật danh sách quản lý khi chuyển đến trang admin dashboard
        if (pageId === 'admin-dashboard') {
            renderAdminProducts();
        }

        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
            }
        });
        window.scrollTo(0, 0);

        if (pushState) {
            history.pushState({ page: pageId }, '', `#${pageId}`);
        }
        updateUIForUserRole(); // Cập nhật hiển thị menu sau khi chuyển trang
        // Ẩn menu hamburger nếu nó đang mở sau khi chuyển trang
        navMenu.classList.remove('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.page) {
            showPage(event.state.page, false);
        } else {
            showPage('home', false); 
        }
    });

    // Toggle hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // --- USER ROLE MANAGEMENT ---
    function updateUIForUserRole() {
        if (currentUser && currentUser.role === 'admin') {
            // ĐÃ SỬA: Thay đổi cách quản lý hiển thị bằng classList
            adminLink.classList.add('visible-for-admin'); 
        } else {
            // ĐÃ SỬA: Thay đổi cách quản lý hiển thị bằng classList
            adminLink.classList.remove('visible-for-admin');
        }
    }

    // --- RENDER FUNCTIONS ---
    function formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN').format(amount);
    }

    function renderProducts(productsToRender, container) {
        container.innerHTML = '';
        if (productsToRender.length === 0) {
            container.innerHTML = '<p>Không tìm thấy sản phẩm nào.</p>';
            return;
        }
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-card-body">
                    <h3>${product.name}</h3>
                    <p class="product-price">${formatCurrency(product.price)} VND</p>
                    <button class="btn view-detail-btn" data-id="${product.id}">Xem chi tiết</button>
                </div>
            `;
            container.appendChild(productCard);
        });

        document.querySelectorAll('.view-detail-btn').forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.dataset.id);
                renderProductDetail(productId);
                showPage('product-detail');
            });
        });
    }

    function renderProductDetail(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            detailContentContainer.innerHTML = `
                <div class="detail-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="detail-info">
                    <h2>${product.name}</h2>
                    <p class="detail-price">${formatCurrency(product.price)} VND</p>
                    <p class="detail-desc">${product.description}</p>
                    <div class="quantity-selector">
                        <label for="quantity">Số lượng:</label>
                        <input type="number" id="quantity" value="1" min="1">
                    </div>
                    <button class="btn add-to-cart-btn" data-id="${product.id}">Thêm vào giỏ hàng</button>
                </div>
            `;

            document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
                const quantity = parseInt(document.getElementById('quantity').value);
                addToCart(product.id, quantity);
            });
        }
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
            checkoutBtn.style.display = 'none';
        } else {
               checkoutBtn.style.display = 'inline-block';
        }

        let total = 0;
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return; // Bảo vệ nếu sản phẩm không tồn tại (ví dụ: đã bị xóa)
            const itemTotal = product.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4>${product.name}</h4>
                    <p>Số lượng: 
                        <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    </p>
                </div>
                <p class="cart-item-price">Đơn giá: ${formatCurrency(product.price)}</p>
                <p class="cart-item-total">Tổng: ${formatCurrency(itemTotal)}</p>
                <button class="cart-item-remove" data-id="${item.id}">Xóa</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotal.textContent = formatCurrency(total);
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

        document.querySelectorAll('.cart-quantity-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const id = parseInt(e.target.dataset.id);
                const quantity = parseInt(e.target.value);
                updateCartQuantity(id, quantity);
            });
        });

        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                removeFromCart(id);
            });
        });
    }

    // HÀM MỚI: Render danh sách sản phẩm trong trang quản lý
    function renderAdminProducts() {
        adminProductList.innerHTML = ''; // Xóa nội dung cũ
        if (products.length === 0) {
            adminProductList.innerHTML = '<p>Chưa có sản phẩm nào.</p>';
            return;
        }

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'admin-product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="admin-product-item-info">
                    <h4>${product.name}</h4>
                    <span>Giá: ${formatCurrency(product.price)} VND</span>
                    <span>Danh mục: ${product.category}</span>
                </div>
                <div class="admin-product-item-actions">
                    <button class="btn-delete" data-id="${product.id}">Xóa</button>
                </div>
            `;
            adminProductList.appendChild(productItem);
        });

        // Gán sự kiện cho các nút xóa
        document.querySelectorAll('.btn-delete').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id);
                deleteProduct(productId);
            });
        });
    }


    // --- CART LOGIC ---
    function addToCart(productId, quantity) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ id: productId, quantity: quantity });
        }
        alert('Đã thêm sản phẩm vào giỏ hàng!');
        saveCart();
        renderCart();
    }
    
    function updateCartQuantity(productId, quantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            if (quantity > 0) {
                item.quantity = quantity;
            } else {
                removeFromCart(productId);
            }
        }
        saveCart();
        renderCart();
    }
    
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCart();
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // --- FILTERING & SEARCHING ---
    function applyFilters() {
        let filteredProducts = [...products];

        const searchTerm = searchBar.value.toLowerCase();
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
        }
        
        const mainSearchTerm = mainSearchInput.value.toLowerCase();
           if (mainSearchTerm) {
            filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(mainSearchTerm));
               if (document.activeElement === mainSearchInput) {
                   showPage('products');
               }
        }

        const category = categoryFilter.value;
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === category);
        }

        const sortOrder = priceSort.value;
        if (sortOrder === 'asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(filteredProducts, productListContainer);
    }
    
    [searchBar, mainSearchInput, categoryFilter, priceSort].forEach(el => {
        el.addEventListener('input', applyFilters);
        mainSearchInput.addEventListener('focus', () => searchBar.value = '');
        searchBar.addEventListener('focus', () => mainSearchInput.value = '');
    });

    // --- CHECKOUT ---
    checkoutBtn.addEventListener('click', () => showPage('checkout'));

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        if(cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống!");
            return;
        }
        
        alert(`Cảm ơn ${name}! Đơn hàng của bạn đã được đặt thành công.`);
        
        cart = [];
        saveCart();
        renderCart();
        checkoutForm.reset();
        showPage('home');
    });
    
    // --- LOGIN/REGISTER & ADMIN LOGIN LOGIC ---
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email === ADMIN_USER.username && password === ADMIN_USER.password) {
            currentUser = { username: email, role: 'admin' };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            alert('Đăng nhập quản trị thành công!');
            showPage('home'); // Chuyển về trang chủ sau khi đăng nhập admin
        } else {
            // Đây chỉ là mô phỏng người dùng thông thường.
            // Trong thực tế, bạn sẽ kiểm tra với danh sách người dùng đã đăng ký.
            currentUser = { username: email, role: 'user' };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            alert('Đăng nhập thành công! (Mô phỏng người dùng)');
            showPage('home'); // Chuyển về trang chủ sau khi đăng nhập user
        }
        document.getElementById('login-form').reset();
        updateUIForUserRole(); // Cập nhật hiển thị menu
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Đăng ký thành công! Vui lòng đăng nhập. (Mô phỏng)');
        document.getElementById('register-form').reset();
    });

    // --- ADMIN PRODUCT MANAGEMENT ---
    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Kiểm tra lại quyền admin trước khi thêm sản phẩm
        if (!currentUser || currentUser.role !== 'admin') {
            alert('Bạn không có quyền thêm sản phẩm.');
            return;
        }

        const name = productNameInput.value;
        const price = parseFloat(productPriceInput.value);
        const image = productImageInput.value;
        const description = productDescriptionInput.value;
        const category = productCategoryInput.value;

        if (!name || isNaN(price) || price <= 0 || !image || !description || !category) {
            alert('Vui lòng điền đầy đủ và chính xác thông tin sản phẩm.');
            return;
        }

        // Tạo ID mới cho sản phẩm
        const newProductId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        
        const newProduct = {
            id: newProductId,
            name,
            price,
            image,
            description,
            category
        };

        products.push(newProduct);
        saveProducts(); // Lưu sản phẩm mới vào localStorage
        renderProducts(products, productListContainer); // Cập nhật lại danh sách sản phẩm
        renderProducts(products.slice(0, Math.min(products.length, 4)), featuredProductsContainer); // Cập nhật sản phẩm nổi bật
        
        alert('Sản phẩm đã được thêm thành công!');
        addProductForm.reset(); // Xóa form
        renderAdminProducts(); // CẬP NHẬT LẠI DANH SÁCH QUẢN LÝ SAU KHI THÊM
    });

    // HÀM MỚI: Xóa sản phẩm
    function deleteProduct(productId) {
        if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
            products = products.filter(p => p.id !== productId);
            saveProducts(); // Lưu thay đổi vào localStorage
            renderProducts(products, productListContainer); // Cập nhật danh sách sản phẩm chung
            // Đảm bảo cập nhật sản phẩm nổi bật nếu có
            renderProducts(products.slice(0, Math.min(products.length, 4)), featuredProductsContainer);
            renderAdminProducts(); // Cập nhật danh sách quản lý
            alert('Sản phẩm đã được xóa.');
        }
    }


    function saveProducts() {
        localStorage.setItem('myStoreProducts', JSON.stringify(products));
    }

    // --- INITIALIZATION ---
    function init() {
        // Kiểm tra hash trong URL để hiển thị đúng trang khi tải lại hoặc truy cập trực tiếp
        const initialPage = window.location.hash.substring(1) || 'home';
        showPage(initialPage, false); // Không pushState khi khởi tạo

        renderProducts(products, productListContainer);
        // Đảm bảo có ít nhất 4 sản phẩm để hiển thị, nếu không thì hiển thị tất cả
        renderProducts(products.slice(0, Math.min(products.length, 4)), featuredProductsContainer); 
        renderCart();
        updateUIForUserRole(); // Cập nhật hiển thị menu khi tải trang

        // HIỂN THỊ DANH SÁCH QUẢN LÝ NGAY KHI TRANG ADMIN ĐƯỢC TẢI
        if (initialPage === 'admin-dashboard') {
            renderAdminProducts();
        }
    }

    init();
});