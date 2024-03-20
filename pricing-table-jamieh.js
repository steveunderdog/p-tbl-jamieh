document.addEventListener('DOMContentLoaded', function() {
    const planOptionsJamie = document.querySelectorAll('.plan-option-jamie');
    const planContentsJamie = document.querySelectorAll('.plan-content-jamie');

    planOptionsJamie.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsJamie.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsJamie.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSectionJamie = document.querySelector('.expandable-section-jamie');
    const expandableContentJamie = document.querySelector('.expandable-content-jamie');

    expandableSectionJamie.addEventListener('click', function() {
        expandableContentJamie.style.display = expandableContentJamie.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnJamie = document.getElementById('founder15-book-now-jamie');
    const founder15ScheduleEmbedJamie = document.getElementById('founder15-schedule-embed-jamie');
    const founder15PackageDetailsJamie = document.getElementById('founder15-package-details-jamie');
    const founder15BackToFeaturesJamie = document.getElementById('founder15-back-to-features-jamie');

    founder15BookNowBtnJamie.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedJamie.style.display = 'block';
        founder15PackageDetailsJamie.style.display = 'none';
        founder15BackToFeaturesJamie.style.display = 'block';
    });

    founder15BackToFeaturesJamie.addEventListener('click', function() {
        founder15ScheduleEmbedJamie.style.display = 'none';
        founder15PackageDetailsJamie.style.display = 'block';
        founder15BackToFeaturesJamie.style.display = 'none';
    });

    const growthBookNowBtnJamie = document.getElementById('growth-book-now-jamie');
    const growthScheduleEmbedJamie = document.getElementById('growth-schedule-embed-jamie');
    const growthPackageDetailsJamie = document.getElementById('growth-package-details-jamie');
    const growthBackToFeaturesJamie = document.getElementById('growth-back-to-features-jamie');

    growthBookNowBtnJamie.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedJamie.style.display = 'block';
        growthPackageDetailsJamie.style.display = 'none';
        growthBackToFeaturesJamie.style.display = 'block';
    });

    growthBackToFeaturesJamie.addEventListener('click', function() {
        growthScheduleEmbedJamie.style.display = 'none';
        growthPackageDetailsJamie.style.display = 'block';
        growthBackToFeaturesJamie.style.display = 'none';
    });

    const accelerateBookNowBtnJamie = document.getElementById('accelerate-book-now-jamie');
    const accelerateScheduleEmbedJamie = document.getElementById('accelerate-schedule-embed-jamie');
    const acceleratePackageDetailsJamie = document.getElementById('accelerate-package-details-jamie');
    const accelerateBackToFeaturesJamie = document.getElementById('accelerate-back-to-features-jamie');

    accelerateBookNowBtnJamie.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedJamie.style.display = 'block';
        acceleratePackageDetailsJamie.style.display = 'none';
        accelerateBackToFeaturesJamie.style.display = 'block';
    });

    accelerateBackToFeaturesJamie.addEventListener('click', function() {
        accelerateScheduleEmbedJamie.style.display = 'none';
        acceleratePackageDetailsJamie.style.display = 'block';
        accelerateBackToFeaturesJamie.style.display = 'none';
    });
});
