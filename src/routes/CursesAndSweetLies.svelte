<script>
  import {
    Grid,
    Row,
    Column,
    Header,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    ModalFooter,
    ComposedModal,
    ModalHeader,
  } from "carbon-components-svelte";
  import {
    LogoFacebook, 
    LogoTwitter,
    LogoInstagram,
    FavoriteFilled,
  } from "carbon-icons-svelte";
  import Carousel from 'svelte-carousel'
  import { Footer, MaterialApp } from 'svelte-materialify';

  let open = false;

  function modal(){
    open = true;
  }

  function close(){
    open=false;
  }
</script>

<style>
  .backG {
		background-color: rgba(255, 255, 255, 0.5) !important;
    border-radius: 10px;
	}

  .backG:hover {
    background-color: rgb(199 199 201) !important;
  }

  .img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .divDeg {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .divImg {
    background-image: url("https://video.fntr6-3.fna.fbcdn.net/v/t39.30808-6/283675777_114752501239451_9102926716176282627_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEwjIaVjtKNjAsYGbn1-HglImQ27mUZrHIiZDbuZRmsctjhhevMSsOBGbOdGkTR_J4LSAR3zDS3Agdhw2dY1KBB&_nc_ohc=vSO13J2maAsAX9WBGWl&_nc_ht=video.fntr6-3.fna&oh=00_AT8cV_bVw_oyVCmjdTQ_0WnCCjVoiuGXMVMTTahhCn_Vzw&oe=6290EDFC");
    background-size: 100% auto;
    background-repeat:no-repeat;
  }

  .imgCarousel {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/white.css"
  />
</svelte:head>

<Header company="The8Imperium " platformName="Curses & Sweet Lies">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <SideNav rail>
    <SideNavItems>
      <SideNavLink icon={LogoFacebook} text="Facebook" href="https://www.facebook.com/Curses-Sweet-Lies-114750657906302" target="_blank" />
      <SideNavLink icon={LogoTwitter} text="Twitter" href="https://twitter.com/the8imperium" target="_blank" />
      <SideNavLink icon={LogoInstagram} text="Instagram" href="https://instagram.com/curses.and.sweet_lies" target="_blank" />
      <SideNavDivider />
      <SideNavLink icon={FavoriteFilled} text="Support Us" on:click={modal} />
    </SideNavItems>
  </SideNav>
</Header>


<h6> </h6>
<br/><br/><br/>

<div class="divImg">
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/>
  <br/><br/>
  <div class="divDeg">              
    <Grid>
      <Row>
        <Column lg={1} />
        <Column lg={14}>
          <span class="text-h4 mb-2 white-text">Una nueva era se acerca, el bien y el mal se encuentran, una forma de derrotarlo es ...</span>
        </Column>
        <Column lg={1} />
      </Row>
    </Grid>
  </div>
</div>

<br/><br/><br/><br/><br/>

<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <div class="backG">              
        <Grid>
          <Row>
            <Column lg={1} />
            <Column lg={7}>
              <img class="img" src="https://video.fntr6-1.fna.fbcdn.net/v/t39.30808-6/284012687_115094487871919_2296298484457789714_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFVaw1VlOXvqdMmOJzGug5gHLRdqyPaGeoctF2rI9oZ6jvXq-iUVzM6P7yAWOot4asVnJp5CTDjnccC9fFQ4KXn&_nc_ohc=OIpihhl70rIAX_bJNCx&_nc_oc=AQlUoD-9QqgXyzP0XqsYcQ1b4tzb3-XevE44h0JMXNksTyZBYMqVnYNojzZAXPJJDkI&_nc_ht=video.fntr6-1.fna&oh=00_AT_LiYost31aZfCJbn1RB8B2hOynQBxhuNhk9e6X8XDAcQ&oe=62916EC4" alt="background" />              
            </Column>
            <Column>
              <br />
              <span class="text-h5 mb-2">Spring Boy #D</span>
              <br />
              <span class="text-overline">Equipado para la guerra, puro personaje, demostrando a mi país que somos los más leales.</span>
              
            </Column>
            <Column lg={1} />
          </Row>
        </Grid>
      </div>
    </Column>
  </Row>
  <br /><br />
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <div class="backG">              
        <Grid>
          <Row>
            <Column lg={1} />
            <Column>
              <br />
              <span class="text-h5 mb-2">Strange Human #N</span>
              <br />
              <span class="text-overline">Odian a los villanos, sin saber realmente que es lo que los mueve a hacer tales acciones.</span>
            </Column>
            <Column lg={7}>
              <img class="img" src="https://video.fntr6-1.fna.fbcdn.net/v/t39.30808-6/283831087_115094267871941_4357644349877877543_n.png?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGF_6pLpz0VDjnXaackZPalAD5Vl6wesgcAPlWXrB6yB-j9gcxSan7ANI7U2f3TbVQuCDf3ifzNdXeJJi1sPg98&_nc_ohc=6xqfsORy-9oAX81CGCk&tn=s-UYgS_lySr5LbDJ&_nc_ht=video.fntr6-1.fna&oh=00_AT-eNJgCvu3oY9dKkVe9W63Ei6fI81r1TEnbkBOKZ369TA&oe=629057D2" alt="background" />
            </Column>
            <Column lg={1} />
          </Row>
        </Grid>
      </div>
    </Column>
  </Row>
</Grid>

<br/><br/><br/><br/><br/>

<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <div class="backG">
        <br />
      <Carousel
        autoplay
        autoplayDuration={5000}
        autoplayProgressVisible
        pauseOnFocus>         
          <div class="img-container">
            <img src="https://video.fntr6-1.fna.fbcdn.net/v/t39.30808-6/283236661_114878564560178_1740576727914607953_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGxUb1YCL8skE2quCkiQoEBVGbfigS92ZpUZt-KBL3ZmiyNp3yAs3OWlCpz4NEDPm2jA8OI4xvLF_85SPh7bHdq&_nc_ohc=yjZM7qupENYAX--F4eb&_nc_ht=video.fntr6-1.fna&oh=00_AT_tvXUk2H5Yx_efQzRPUGhe7h4qZv_3Q8F3mpHLnU95mQ&oe=62911775" 
            alt="ad01" class="imgCarousel" />
          </div>
          <div class="img-container">
            <img src="https://video.fntr6-1.fna.fbcdn.net/v/t39.30808-6/281746913_114877877893580_8102887399812825571_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGkV16ciOrernXE7kzw_wyarypZhicxzdWvKlmGJzHN1cxyS-hQEIU8EVY22tvSYIQGHLG3a7Q8kd-Iv--EO4oI&_nc_ohc=ILjzu7P6Y4oAX9k2Cph&_nc_ht=video.fntr6-1.fna&oh=00_AT-TPJPP5jF72jn1YVvf_fJCUjSCkDrU32Sg5qvfepRdmw&oe=6291B175" 
            alt="ad02" class="imgCarousel" />
          </div>
          <div class="img-container">
            <img src="https://video.fntr6-1.fna.fbcdn.net/v/t39.30808-6/281699613_114877134560321_7545355575635483629_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEVEzH5eroIwlYsPoUA50QbbYAVXCeNVudtgBVcJ41W5w1MuT3nb0Vl_nFA7LQlkAGXJGpSapyiQCHB02D9-RiD&_nc_ohc=9YJlCLRPqMoAX-TzfRs&_nc_ht=video.fntr6-1.fna&oh=00_AT--ls70XZQapMtRk7PrXz621hzWRIqiereUSy7Z_ybmjQ&oe=6290F8AE" 
            alt="ad03" class="imgCarousel" />
          </div>
          <div class="img-container">
            <img src="https://pbs.twimg.com/media/FTdPZVFWYAEI8P5?format=jpg&name=large" 
            alt="ad04" class="imgCarousel" />
          </div>
      </Carousel>
    </div>
    </Column>
  </Row>
  <br/><br/><br/><br/>
  <Row>
    <Column lg={1} />
    <Column lg={7}>
      <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">Focus on Me<a href="https://twitter.com/hashtag/CursesandSweetLies?src=hash&amp;ref_src=twsrc%5Etfw">#CursesandSweetLies</a>
          <br>#2505 
          <a href="https://t.co/GoblFPPBVH">pic.twitter.com/GoblFPPBVH</a></p>&mdash; Curses &amp; Sweet Lies (@the8imperium) 
          <a href="https://twitter.com/the8imperium/status/1528776937728000001?ref_src=twsrc%5Etfw">May 23, 2022</a>
        </blockquote> 
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
        </script>
    </Column>
    <Column lg={1} />
    <Column lg={7}>       
      <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">Who is? <a href="https://twitter.com/hashtag/CursesandSweetLies?src=hash&amp;ref_src=twsrc%5Etfw">#CursesandSweetLies</a>
           <br>#2505 
           <a href="https://t.co/Ao14eeGmUp">pic.twitter.com/Ao14eeGmUp</a>
          </p>&mdash; Curses &amp; Sweet Lies (@the8imperium) <a href="https://twitter.com/the8imperium/status/1528776488962732033?ref_src=twsrc%5Etfw">May 23, 2022</a>
        </blockquote> 
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
        </script>      
    </Column>
    <Column lg={1} />
  </Row>
  <br/><br/><br/><br/>
  <Row>
    <Column>
    
    </Column>
  </Row>
</Grid>

<br/><br/><br/><br/><br/>

<Footer padless class="indigo theme--dark justify-center flex-column">
  <div class="mt-2 mb-2">

  </div>
  <div class="indigo lighten-1 pa-2 text-center" style="width:100%">
    LMAD -
    <b>The 8 imperium</b>
  </div>
</Footer>

{#if open}
  <ComposedModal bind:open on:submit={close} preventCloseOnClickOutside >
    <ModalHeader label="T8I" title="¡Muchas gracias por apoyar este proyecto!" />
    <br /><br /><br />
    <ModalFooter
      primaryButtonText="Aceptar"
    />
  </ComposedModal>
{/if}