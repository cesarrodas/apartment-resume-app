<template>
  <div class="Footer">
    <div></div>
    <div>
      <h3>RentalMaster Network</h3>
      <ul class="Links">
        <li><a>Apartamentos.com</a></li>
        <li><a>ApartmentFinder.com</a></li>
        <li><a>ApartmentHomeLiving.com</a></li>
        <li><a>WestsideRentals.com</a></li>
        <li><a>LoopNet.com</a></li>
        <li><a>Cityfeet.com</a></li>
        <li><a>Realla.co</a></li>
        <li><a>Showcase.com</a></li>
        <li><a>BizBuySell.com</a></li>
        <li><a>LandsofAmerica.com</a></li>
        <li><a>Homes.com</a></li>
      </ul>
    </div>
    <div>
      <h3>About Us</h3>
      <ul class="Links">
        <li><a>Careers</a></li>
        <li><a>Contact</a></li>
        <li><a>Terms of Service</a></li>
        <li><a>Privacy Statement</a></li>
        <li><a>Equal Housing</a></li>
        <li><a>Avoid Scams</a></li>
        <li><a>Accessibility</a></li>
        <li><a>Sitemap</a></li>
      </ul>
    </div>
    <div>
      <h3>For Advertizers</h3>
      <ul class="Links">
        <li><a>Customer Portal</a></li>
        <li><a>Listing Feeds</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .Footer {
    background-color: #262626;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20px 1fr 1fr 1fr;
    padding-top: 2rem;
    overflow-x: hidden;
    text-align: center;
  }

  h3 {
    font-size: 1.2rem;
    color: white;
    padding-bottom: 1rem;
    text-align: center;
  }

  .Links {
    list-style-type: none;
    color: white;
    padding-bottom: 2rem;
    padding-left: 0;
  }

  a:hover {
    cursor: pointer;
    font-weight: bold;
  }

  @media (min-width: 900px) {
    .Footer {
      background-color: #262626;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      padding-top: 2rem;
      overflow-x: hidden;
    }
  }
</style>