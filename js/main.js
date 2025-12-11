// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'orange-red': '#FF4500',
                'soft-gray': '#F5F5F5',
                'deep-gray': '#333333'
            }
        }
    }
};

// 프로젝트 카드 접기/펼치기 기능
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const header = card.querySelector('.project-header');
        const content = card.querySelector('.project-content');
        const arrow = header.querySelector('svg');
        
        // 초기 상태 설정 (모두 접힌 상태)
        content.style.maxHeight = '0';
        
        header.addEventListener('click', () => {
            // 현재 클릭한 카드의 내용 토글
            if (content.style.maxHeight === '0px') {
                // 다른 모든 카드 접기
                projectCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        const otherContent = otherCard.querySelector('.project-content');
                        const otherArrow = otherCard.querySelector('svg');
                        otherContent.style.maxHeight = '0';
                        otherArrow.style.transform = 'rotate(0)';
                    }
                });
                
                // 현재 카드 펼치기
                content.style.maxHeight = content.scrollHeight + 'px';
                arrow.style.transform = 'rotate(180deg)';
            } else {
                // 현재 카드 접기
                content.style.maxHeight = '0';
                arrow.style.transform = 'rotate(0)';
            }
        });
        
        // 창 크기 변경 시 내용 높이 조정
        window.addEventListener('resize', () => {
            if (content.style.maxHeight !== '0px') {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    console.log('Portfolio website loaded successfully!');
});
