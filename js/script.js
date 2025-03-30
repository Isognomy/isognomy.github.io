        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon.classList.contains('nf-fa-bars')) {
                icon.classList.remove('nf-fa-bars');
                icon.classList.add('nf-fa-times');
            } else {
                icon.classList.remove('nf-fa-times');
                icon.classList.add('nf-fa-bars');
            }
        });