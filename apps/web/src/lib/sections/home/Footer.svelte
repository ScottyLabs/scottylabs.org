<script lang="ts">
  import css from './Footer.module.css';
  import tartanConnectIcon from '$lib/assets/icons/socials/tartan-connect.png';
  import instagramIcon from '$lib/assets/icons/socials/instagram.svg';
  import linkedinIcon from '$lib/assets/icons/socials/linkedin.svg';
  import mediumIcon from '$lib/assets/icons/socials/medium.svg';
  import slackIcon from '$lib/assets/icons/socials/slack.svg';
  import emailIcon from '$lib/assets/icons/socials/email.svg';
  import divider from '$lib/assets/icons/socials/social-divider.png';

  const socialLinks = [
    {
      icon: tartanConnectIcon,
      name: 'Tartan Connect',
      url: 'https://tartanconnect.cmu.edu/scottylabs/club_signup',
      color: 'hsl(0,100%,30%)'
    },
    {
      icon: instagramIcon,
      name: 'Instagram',
      url: 'https://www.instagram.com/cmu.scottylabs/',
      color: '#6532D2'
    },
    {
      icon: linkedinIcon,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/scottylabs',
      color: '#0E76A8'
    },
    {
      icon: mediumIcon,
      name: 'Medium',
      url: 'https://medium.com/tartanhacks',
      color: 'black'
    },
    {
      icon: slackIcon,
      name: 'Slack',
      url: 'https://join.slack.com/t/scottylabs/shared_invite/zt-3bgp5in0l-T5KKNY70k70CvVVqLcKlDg',
      color: '#4A154B'
    },
    {
      icon: emailIcon,
      name: 'Email us!',
      url: 'mailto:hello@scottylabs.org',
      color: 'gray'
    }
  ];

  const legalDocs = [
    {
      label: 'IRS determination letter',
      url: 'https://assets.scottylabs.org/legal/irs-determination-letter.pdf'
    },
    {
      label: 'Articles of incorporation',
      url: 'https://assets.scottylabs.org/legal/articles-of-incorporation.pdf'
    },
    {
      label: 'Form 1023-EZ',
      url: 'https://assets.scottylabs.org/legal/form-1023-ez.pdf'
    }
  ];

  const year = new Date().getFullYear();
</script>

<footer class={css['footer-container']}>
  <div class={css.footer}>
    <div class={css['footer__copyright']}>
      Made with ❤️ by ScottyLabs © {year}
    </div>
    {#each socialLinks as link, i (link.name)}
      <a
        class={css['social-link']}
        href={link.url}
        target="_blank"
        style={`--bg-color: ${link.color};`}
      >
        <div>
          <img src={link.icon} alt="" />
          <div class={css['social-link__description']}>{link.name}</div>
        </div>
      </a>
      {#if i !== socialLinks.length - 1}
        <img class={css['social-link-divider']} src={divider} alt="" />
      {/if}
    {/each}
  </div>
  <div class={css['footer__legal']}>
    <div>ScottyLabs is a 501(c)(3) tax-exempt nonprofit organization.</div>
    <div>
      502 W 7th St Ste 100, Erie, PA 16502 · EIN 42-2037653 · D-U-N-S 145005627
    </div>
    <div class={css['footer__legal-docs']}>
      {#each legalDocs as doc, i (doc.url)}
        {#if i > 0}
          {' · '}
        {/if}
        <a href={doc.url} target="_blank" rel="noreferrer">
          {doc.label}
        </a>
      {/each}
    </div>
  </div>
</footer>
