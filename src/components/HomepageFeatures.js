import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Buy me... Something',
    icon: (<a href="https://www.buymeacoffee.com/mathesonstep"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me Something&emoji=🎉&slug=mathesonstep&button_colour=25c2a0&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"/></a>),
    description: (
      <>
        I don't drink coffee... but you can still donate if you appreciate the stuff I do.
      </>
    ),
  },
  {
    title: 'Add the Repository',
    icon: (<a href="https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fikifar2012%2Fha-addons" target="_blank"><img src="https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg" alt="Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled." /></a>),
    description: (
      <>
        Click the button above to add the repository to your Home Assistant instance.
      </>
    ),
  },
  {
    title: 'DigitalOcean Referral',
    icon: (<a href="https://www.digitalocean.com/?refcode=ab209243eec5&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" /></a>),
    description: (
      <>
        If you can't support me monetarily, you can still help me pay server costs by using my DigitalOcean referral link.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.icon}>
        {icon}
       </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
