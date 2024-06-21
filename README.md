# Test Wordpress Site

## Install

1. Clone into an existing Wordpress project's wp-content
2. Search and replace the occurrences of 'example-site.local' in database.sql with your local site url
3. `wp db query < database.sql` 
4. `cd wp-content/themes/cecils-theme`
5. Update bud.config.js with your local site url
6. `composer install`
7. `yarn`
8. `yarn build`