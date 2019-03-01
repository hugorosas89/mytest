import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Header, Menu, Image, Grid, List, Icon, Item, Divider,Segment, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <BasicMenu/>
        </Container>
        <Container fluid>
          <Banner/>
        </Container>
        <Container fluid className="ContainerGrid">
          <Container>
            <GridColumns/>
          </Container>
        </Container>
        <Container fluid>
          <InfoBanner/>
        </Container>
        <Container fluid className="ContainerService">
          <Container>
            <Services/>
          </Container>
        </Container> 
        <Container className="ContainerFeature">
          <Feature/>
        </Container>
        <Container fluid className="ContainerClients">
          <Clients/>
        </Container> 
        <Container fluid className="ContainerMenuFooter">
          <MenuFooter/>
        </Container>
        <Container fluid className="ContainerFooter">
          <Footer/>
        </Container>
      </div>
    );
  }
}

class BasicMenu extends Component {
  state = { activeItem: 'inicio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
      <Menu fixed='top' inverted>
        <Container>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Image src='logo-1.png' />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={12}>
              <Menu text floated='right' className="MainMenu">
                <Menu.Item
                  name='inicio'
                  active={activeItem === 'inicio'}
                  onClick={this.handleItemClick}/>
                <Menu.Item
                  name='servicios'
                  active={activeItem === 'servicios'}
                  onClick={this.handleItemClick}/>
                <Menu.Item
                  name='nosotros'
                  active={activeItem === 'nosotros'}
                  onClick={this.handleItemClick}/>
                  <Menu.Item
                  name='contacto'
                  active={activeItem === 'contacto'}
                  onClick={this.handleItemClick}/>
              </Menu>
            </Grid.Column>
          </Grid>
        </Container>
      </Menu>
      
    )
  }
}

class Banner extends Component {
  render(){
    return (
      <Grid.Row>
        <div className='Banner'>
          <Header as='h4'>NUTRIAM</Header>
          <Header as='h1'>Long headline to turn your visitors into users</Header>
          <List.Content>
            <a className='Btn-contact' href='#'>Contáctanos <Icon name='angle right'/></a>
          </List.Content>
        </div>
      </Grid.Row>
    )
  }
}

class GridColumns extends Component {
  render(){
    return (
      
        <Grid >
          <Grid.Row columns={3} only='computer' divided>
            <Grid.Column className='GridColumns'>
              
                <Header as='h2' icon>
                  <Icon name='american sign language interpreting' />
                  ALIMENTOS LIOFILIZADOS
                  <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header.Subheader>
                </Header>
              
            </Grid.Column>
            <Grid.Column className='GridColumns' >
              
                <Header as='h2' icon>
                  <Icon name='food' />
                  TRANSFORMACIÓN DE ALIMENTOS
                  <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header.Subheader>
                </Header>
              
            </Grid.Column>
            <Grid.Column className='GridColumns'>
              
                <Header as='h2' icon>
                  <Icon name='medkit' />
                  PRODUCTOS FARMACÉUTICOS
                  <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header.Subheader>
                </Header>
              
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} only='tablet'>
            <Grid.Column className='GridColumns'>
              
                <Header as='h2' icon>
                  <Icon name='american sign language interpreting' />
                  ALIMENTOS LIOFILIZADOS
                  <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header.Subheader>
                </Header>
              
            </Grid.Column>
            <Grid.Column className='GridColumns'>
             
                <Header as='h2' icon>
                  <Icon name='food' />
                  TRANSFORMACIÓN DE ALIMENTOS
                  <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header.Subheader>
                </Header>
             
            </Grid.Column>
            <Grid.Column className='GridColumns'>
              
                <Header as='h2' icon>
                  <Icon name='medkit' />
                  PRODUCTOS FARMACÉUTICOS
                  <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header.Subheader>
                </Header>
              
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} only='mobile'>
            <Grid.Column className='GridColumns'>
              
                <Header as='h2' icon>
                  <Icon name='american sign language interpreting' />
                  ALIMENTOS LIOFILIZADOS
                  <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header.Subheader>
                </Header>
              
            </Grid.Column>
            <Grid.Column className='GridColumns'>
              
                <Header as='h2' icon>
                  <Icon name='food' />
                  TRANSFORMACIÓN DE ALIMENTOS
                  <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header.Subheader>
                </Header>
              
            </Grid.Column>
            <Grid.Column className='GridColumns'>
              
                <Header as='h2' icon>
                  <Icon name='medkit' />
                  PRODUCTOS FARMACÉUTICOS
                  <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Header.Subheader>
                </Header>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
     
    )
  }
}

class InfoBanner extends Component {
  render() {
    return (
      <Grid.Row>
        <div className='InfoBanner'>
          <Header as='h1'>NUTRIAM</Header>
          <Container>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
              ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi.
            </p>
            <Button color='green'>Ver más</Button>
          </Container>
        </div>
      </Grid.Row>
    )
  }
}

class Services extends Component {
  render() {
    return (
      <div className='SectionServices'>
      <p className='TittleServices'>SERVICIOS</p>
        <Grid doubling columns={3} >
          <Grid.Column >
            <Image src='https://picsum.photos/500/300' />
            <Header as='h2' textAlign='left'>Medium length headline</Header>
            <p className='TextServices'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong.
            </p>
            <List.Content className='BtnService'>
              <a href='#'>Ver más <Icon name='angle right'/></a>
            </List.Content>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://picsum.photos/500/300/?random'  />
            <Header as='h2' textAlign='left'>Medium length headline</Header>
            <p className='TextServices'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong.
            </p>
            <List.Content className='BtnService'>
              <a href='#'>Ver más <Icon name='angle right'/></a>
            </List.Content>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://picsum.photos/500/300'  />
            <Header as='h2' textAlign='left'>Medium length headline</Header>
            <p className='TextServices'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong.
            </p>
            <List.Content className='BtnService'>
              <a href='#'>Ver más <Icon name='angle right'/></a>
            </List.Content>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://picsum.photos/500/300/?random'  />
            <Header as='h2' textAlign='left'>Medium length headline</Header>
            <p className='TextServices'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong.
            </p>
            <List.Content className='BtnService'>
              <a href='#'>Ver más <Icon name='angle right'/></a>
            </List.Content>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://picsum.photos/500/300'  />
            <Header as='h2' textAlign='left'>Medium length headline</Header>
            <p className='TextServices'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong.
            </p>
            <List.Content className='BtnService'>
              <a href='#'>Ver más <Icon name='angle right'/></a>
            </List.Content>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://picsum.photos/500/300/?random' />
            <Header as='h2' textAlign='left'>Medium length headline</Header>
            <p className='TextServices'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong.
            </p>
            <List.Content className='BtnService'>
              <a href='#'>Ver más <Icon name='angle right'/></a>
            </List.Content>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

class Feature extends Component {
  render() {
    return (
      <Grid stackable columns={2} divided='vertically'>
        <Grid.Row>
          <Grid.Column>
            <Image src='https://picsum.photos/400/400/?random' />
          </Grid.Column>
          <Grid.Column>
            <Header as='h1' textAlign='left'>Long headline to turn your visitors into users</Header>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong.
            </p>
            <Grid stackable columns={2}>
              <Grid.Column>
                <Header as='h3' textAlign='left'>Long headline to turn your visitors into users</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa strong.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' textAlign='left'>Long headline to turn your visitors into users</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa strong.
                </p>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as='h1' textAlign='left'>Long headline to turn your visitors into users and achieve more</Header>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong.
            </p>
            <List>
              <List.Item><Icon name='check circle outline'/>Showcase and embed your work with</List.Item>
              <List.Item><Icon name='check circle outline'/>Publish across social channels in a click</List.Item>
              <List.Item><Icon name='check circle outline'/>Sell your videos worldwide</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://picsum.photos/400/400/?random' floated='right' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

class Clients extends Component {
  render() {
    return (
      <Container>
        <Grid  columns={6} doubling >
          <Grid.Column >
            <p className='ColumnClient'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </Grid.Column>
          <Grid.Column >
            <Image src='https://picsum.photos/200/200' />
          </Grid.Column>
          <Grid.Column >
            <Image src='https://picsum.photos/200/200/?random' />
          </Grid.Column>
          <Grid.Column >
            <Image src='https://picsum.photos/200/200' />
          </Grid.Column>
          <Grid.Column >
            <Image src='https://picsum.photos/200/200/?random' />
          </Grid.Column>
          <Grid.Column >
            <Image src='https://picsum.photos/200/200' />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

class MenuFooter extends Component {
  render() {
    return (
      <Container>
        <Grid stackable>
          <Grid.Column width={4}>
            <Image src='logo-2.png' />
          </Grid.Column>
          <Grid.Column width={12} className='ColumnMenuFooter'>
            <List horizontal>
              <List.Item href='#'>Inicio</List.Item>
              <List.Item href='#'>Servicios</List.Item>
              <List.Item href='#'>Nosotros</List.Item>
              <List.Item href='#'>Contacto</List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <Container>
        <List horizontal>
          <List.Item href='#'><Icon name='facebook'/></List.Item>
          <List.Item href='#'><Icon name='instagram'/></List.Item>
          <List.Item href='#'><Icon name='twitter square'/></List.Item>
          <List.Item href='#'><Icon name='linkedin'/></List.Item>
          <List.Item href='#'><Icon name='pinterest square'/></List.Item>
        </List>
        <Grid.Row>
          <List horizontal>
          <List.Item href='#'>Aviso de privacidad</List.Item>
          <List.Item href='#'>Términos y condiciones</List.Item>
        </List>
        </Grid.Row>
        <Grid.Row>
          <List.Item href='#' className='Guaostudio'>© 2019 Guaostudio</List.Item>
        </Grid.Row>
      </Container>
    )
  }
}

export default App;
