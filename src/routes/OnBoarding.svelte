<script>
  import {
    Grid,
    Row,
    Column,
    ProgressIndicator, 
    ProgressStep,
    Button,
    ComposedModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "carbon-components-svelte";
  import Header from "../components/Header.svelte";
  import OnBoardingGuide from "../components/OnBoardingGuide.svelte";
  import { useNavigate } from 'svelte-navigator';

  const navigate = useNavigate();
  let currentIndex = 0;
  let open = false;

  function addIndex(val){
    currentIndex++;
    if(currentIndex >= 4){
      open = true;
    }
  }
  function substIndex(val){
    if(currentIndex != 0)
      currentIndex--;
  }

  async function confirm(){
    open=false;
    navigate("/MyProfile");
  };

</script>

<style>
  .backG {
		background-color: #ffffff !important;
	}
</style>

<Header />

<h6> </h6>
<br/><br/><br/><br/><br/>
<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <br/>
        <h2>Guía</h2>
      <br/><br/>
    </Column>
  </Row>
</Grid>

<Grid>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
      <div class="backG">
        <OnBoardingGuide currentIndex={currentIndex} />
      </div>
    </Column>
  </Row>
  <Row>
    <Column lg={1} />
    <Column lg={14}>
        <div class="backG">
        <Grid>
          <Row>
            <Column lg={5} />
            <Column noGutter>
              <ProgressIndicator bind:currentIndex>
                <ProgressStep
                  label="Bienvenida"
                />
                <ProgressStep
                  label="Navegación"
                />
                <ProgressStep
                  label="Buscar"
                />
                <ProgressStep
                  label="Comprar"
                />
              </ProgressIndicator>
            </Column>
          </Row>
          <br/><br/>
          <Row>
            <Column lg={5} />
            <Column lg={4}>
              <Button kind="tertiary" on:click={substIndex} >Anterior</Button>
            </Column>
            <Column lg={5}>
              <Button kind="tertiary" on:click={addIndex} >Siguiente</Button>
            </Column>
          </Row>
          <Row>
            <Column><br /><br /></Column>
          </Row>
        </Grid>
      </div>
    </Column>
  </Row>
</Grid>

{#if open}
  <ComposedModal bind:open on:submit={confirm} preventCloseOnClickOutside >
    <ModalHeader label="Adosa" title="¡Ya puedes navegar! ¿Quisieras llenar tu información de contacto?" />
    <br /><br /><br />
    <ModalFooter
      primaryButtonText="Aceptar"
      secondaryButtonText="En otro momento"
      on:click:button--secondary={({ detail }) => {
        if (detail.text === "En otro momento") 
          navigate("/");
      }}
    />
  </ComposedModal>
{/if}