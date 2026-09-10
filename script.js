function togglePassword() {
    const input = document.getElementById('password');
    const btn = document.getElementById('toggleCheckbox');
    const isHidden = input.type === 'password';

    input.type = isHidden ? 'text' : 'password';
    btn.setAttribute('aria-pressed', String(isHidden));
    btn.setAttribute('aria-label', isHidden ? 'Приховати пароль' : 'Показати пароль');
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleCheckbox');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', togglePassword);
    }

    const form = document.querySelector('.login_form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }
});