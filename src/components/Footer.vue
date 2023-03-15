<template>
  <div class="Footer">
    <div></div>
    <div>
      <h3>RentalMaster Network</h3>
      <ul class="Links">
        <li>Apartamentos.com</li>
        <li>ApartmentFinder.com</li>
        <li>ApartmentHomeLiving.com</li>
        <li>WestsideRentals.com</li>
        <li>LoopNet.com</li>
        <li>Cityfeet.com</li>
        <li>Realla.co</li>
        <li>Showcase.com</li>
        <li>BizBuySell.com</li>
        <li>LandsofAmerica.com</li>
        <li>Homes.com</li>
      </ul>
    </div>
    <div>
      <h3>For Advertizers</h3>
      <ul class="Links">
        <li>Customer Portal</li>
        <li>Listing Feeds</li>
      </ul>
    </div>
    <div>
      <h3>About Us</h3>
      <ul class="Links">
        <li>Careers</li>
        <li>Contact</li>
        <li>Terms of Service</li>
        <li>Privacy Statement</li>
        <li>Equal Housing</li>
        <li>Avoid Scams</li>
        <li>Accessibility</li>
        <li>Sitemap</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .Footer {
    background-color: #262626;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 2rem;
    overflow-x: hidden;
  }

  h3 {
    font-size: 1.2rem;
    color: white;
    padding-bottom: 1rem;
  }

  .Links {
    list-style-type: none;
    color: white;
    padding-bottom: 2rem;
  }
</style>