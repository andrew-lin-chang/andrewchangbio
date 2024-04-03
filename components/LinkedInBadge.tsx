import React, { useEffect } from 'react';

export default function LinkedInBadge() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex justify-center rounded-lg overflow-hidden my-4">
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="andrewlinchang" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/andrewlinchang?trk=profile-badge"></a></div>
        </div>
    )
}