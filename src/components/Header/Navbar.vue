<template>
  <div class="navbar-center hidden lg:flex items-center z-50">
    <ul class="menu menu-horizontal font-medium mb-0">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
      <li><router-link :to="{ name: 'blogs' }">Blog</router-link></li>
      <li><router-link to="">Features</router-link></li>
      <li>
        <details>
          <summary>Reports</summary>
          <ul class="rounded-t-none w-40">
            <li><router-link to="">Annual Report</router-link></li>
            <li><router-link to="">Quarterly Report</router-link></li>
            <li><router-link to="">Weekly Report</router-link></li>
          </ul>
        </details>
      </li>
      <li><router-link to="">Announcements</router-link></li>
      <li><router-link to="">Company</router-link></li>
    </ul>
  </div>
</template>
