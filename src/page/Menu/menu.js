import React, {useRef} from "react";
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, useColorScheme} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import {GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Menu() {
  let colorScheme = useColorScheme();

  const modalizeVisible1 = useRef(null);
  function onOpen1() {
    modalizeVisible1.current?.open();
  }

  const modalizeVisible2 = useRef(null);
  function onOpen2() {
    modalizeVisible2.current?.open();
  }

  const modalizeVisible3 = useRef(null);
  function onOpen3() {
    modalizeVisible3.current?.open();
  }

  const modalizeVisible4 = useRef(null);
  function onOpen4() {
    modalizeVisible4.current?.open();
  }

  const modalizeVisible5 = useRef(null);
  function onOpen5() {
    modalizeVisible5.current?.open();
  }

  const modalizeVisible6 = useRef(null);
  function onOpen6() {
    modalizeVisible6.current?.open();
  }

  const modalizeVisible7 = useRef(null);
  function onOpen7() {
    modalizeVisible7.current?.open();
  }

  const modalizeVisible8 = useRef(null);
  function onOpen8() {
    modalizeVisible8.current?.open();
  }

  const modalizeVisible9 = useRef(null);
  function onOpen9() {
    modalizeVisible9.current?.open();
  }

  const modalizeVisible10 = useRef(null);
  function onOpen10() {
    modalizeVisible10.current?.open();
  }

  const modalizeVisible11 = useRef(null);
  function onOpen11() {
    modalizeVisible11.current?.open();
  }

  const modalizeVisible12 = useRef(null);
  function onOpen12() {
    modalizeVisible12.current?.open();
  }

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={[styles.container, {backgroundColor: colorScheme === 'light' ? '#fff' : 'rgb(45, 45, 45)'}]}>
      <View style={styles.header}>
        <Image style={{width: 190, height:45, resizeMode:'stretch'}} source={colorScheme === 'light' ? require('../../imagens/header.png') : require('../../imagens/headerEscuro.png')}/>
      </View>

      <ScrollView>
      {/*Card do pl??stico*/}
      <View>       
          <View style={[styles.infoLixo, {backgroundColor:'#C65555'}]}>
              <Image style={styles.imgInfo} source={require('../../imagens/cardPlastico.png')}/>
              
              <View style={{width:132, marginLeft:35, marginTop:10, width:150}}>
                <Text style={styles.titulo}>Pl??stico</Text> 
                <Text style={{color:'white'}}>Uma das principais inova????es que causa grandes impactos e polui????es no planeta</Text>  

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <TouchableOpacity 
                  style={styles.botao}
                  onPress={onOpen1}            
                  >
                  <AntDesign name="infocirlceo" size={20} color="#C65555"/>        
                  </TouchableOpacity>

                  <TouchableOpacity 
                  style={styles.botao}
                  onPress={onOpen2}            
                  >
                  <FontAwesome name="recycle" size={24} color="#C65555" />      
                  </TouchableOpacity>
                </View>  
              </View> 
            </View>           

          {/*Card do Vidro*/}
          <View style={[styles.infoLixo, {backgroundColor:'#006553'}]}>
              <Image style={[styles.imgInfo, {marginLeft:7}]} source={require('../../imagens/cardVidro.png')}/>

              <View style={{width:155, marginLeft:25}}>
              <Text style={styles.titulo}>Vidro</Text> 
              <Text style={{color:'white', marginBottom:15}}>Com um quilo de vidro se faz outro quilo de vidro, sustent??vel, n??o?</Text>  
            
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen3}            
                >
                <AntDesign name="infocirlceo" size={20} color="#006553"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen4}            
                >
                <FontAwesome name="recycle" size={24} color="#006553" />      
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/*Card do Alum??nio*/}
          <View style={[styles.infoLixo, {backgroundColor:'#FABA32'}]}>                 
              <Image style={styles.imgInfo} source={require('../../imagens/cardAluminio.png')}/>

              <View style={{width:120, marginLeft:35, width:150}}>
                <Text style={styles.titulo}>Alum??nio</Text>           
                <Text style={{color:'white'}}>O metal mais abundante do planeta que em boas m??os pode ter um bom ciclo.</Text> 
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity 
                    style={styles.botao}
                    onPress={onOpen5}            
                    >
                    <AntDesign name="infocirlceo" size={20} color="#FABA32"/>        
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.botao}
                    onPress={onOpen6}            
                    >
                    <FontAwesome name="recycle" size={24} color="#FABA32" />      
                    </TouchableOpacity>
                </View>
              </View>
          </View>

          {/*Card do Papel*/}
          <View style={[styles.infoLixo, {backgroundColor:'#003E65'}]}>
            <Image style={styles.imgInfo} source={require('../../imagens/cardPapel.png')}/>
            <View style={{marginLeft:35, width:150}}>
              <Text style={styles.titulo}>Papel</Text> 
              <Text style={{color:'white', marginBottom:15}}>Dinheiro cai de ??rvore ou ??rvore cai por dinheiro?</Text>  

              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen7}            
                >
                <AntDesign name="infocirlceo" size={20} color="#003E65"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen8}            
                >
                <FontAwesome name="recycle" size={24} color="#003E65" />      
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/*Card do Lixo org??nico*/}
          <View style={[styles.infoLixo, {backgroundColor:'#604033'}]}>
            <Image style={[styles.imgInfo, {width: 140, height: 140, marginLeft:13}]} source={require('../../imagens/cardLixoOrganico.png')}/>
            <View style={{marginLeft:30, width:150}}>
              <Text style={styles.titulo}>Lixo Org??nico</Text> 
              <Text style={{color:'white', marginBottom:25}}>Vai um adubo ou chorume a???</Text>  

              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen9}            
                >
                <AntDesign name="infocirlceo" size={20} color="#604033"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen10}            
                >
                <FontAwesome name="recycle" size={24} color="#604033" />      
                </TouchableOpacity>
              </View>
            </View>
          </View> 
          
          {/*Card do Lixo Eletr??nico*/}
          <View style={[styles.infoLixo, {backgroundColor:'#647681'}]}>
          <Image style={[styles.imgInfo, {width: 155, height: 155, left:15}]} source={require('../../imagens/cardEletronico.png')}/>
            <View style={{marginLeft:30, width:150}}>
              <Text style={styles.titulo}>Lixo eletr??nico</Text> 
              <Text style={{color:'white', marginBottom:15}}>Um grande problema que a Era da Informa????o nos trouxe.</Text>  

              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen11}            
                >
                <AntDesign name="infocirlceo" size={20} color="#647681"/>        
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.botao}
                onPress={onOpen12}            
                >
                <FontAwesome name="recycle" size={24} color="#647681" />      
                </TouchableOpacity>
              </View>
            </View>
          </View>  
        </View>
        </ScrollView>
        
        {/*Janelas do pl??stico*/}
        <Modalize
        ref={modalizeVisible1}
        modalHeight={700}     
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#C65555'}}
        >
          <ScrollView style={[styles.modalContainer, {backgroundColor:'#C65555', height:700}]}>
          <Image style={styles.imgModal} source={require('../../imagens/Plastic.png')}/>
          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Onde pl??stico ?? usado?</Text>
          <Text style={{color:'white', textAlign:'justify'}}>
           ???	O lixo pl??stico est?? presente em diversos utens??lios do cotidiano e algumas dessas pe??as n??o podem ser recicladas, como cabos de panela, teclados de computador, isopor e adesivos; {'\n'}
          ???	J?? nos recicl??veis, podemos citar tampas, garrafas PET, sacos pl??sticos, baldes de pl??stico e potes. {'\n'}
          </Text>

          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

          <Text style={{color:'white', textAlign:'justify'}}>
          ???	Pode causar enchentes devido aos entupimentos de valas e bueiros; {'\n'}
          ???	Causa polui????o visual; {'\n'}
          ???	Afeta gravemente o ecossistema, chegando at?? a matar animais; {'\n'}
          ???	Recipientes com res??duos podem atrair animais transmissores de doen??as. {'\n'}
          </Text>    
          </ScrollView>      
        </Modalize>

        <Modalize
        ref={modalizeVisible2}
        modalHeight={700}
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#C65555'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#C65555', height:700}]}>

          <ScrollView style={{marginBottom:10}}>
          <Image style={styles.imgModal} source={require('../../imagens/Plastic.png')}/>
          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como descartar o pl??stico?</Text>
          <Text style={{color:'white', textAlign:'justify'}}>
          ???	Primeiramente veja se a embalagem pl??stica pode ser reutilizada para outro fim, como exemplo, temos garrafas pet que viram vasos de planta; {'\n'}
          ???	No descarte, limpe a embalagem e separe em 2 lixos: o comum, contendo lixos que n??o podem ser reciclados, e o lixo seco, contendo lixos recicl??veis. {'\n'}
          </Text> 

          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como ?? Feita a Reciclagem:</Text>

          <Text style={{color:'white', textAlign:'justify'}}>
          ???	O processo come??a pela separa????o em 2 grupos de acordo com suas caracter??sticas; {'\n'}
          1. Os Termopl??sticos que podem ser reciclados, afinal s??o derretidos e remodelados em outras embalagens; {'\n'}
          2. Os termorr??gidos que n??o derretem quando aquecidos, logo n??o s??o reciclados. {'\n'} {'\n'}                      
          </Text>    
          </ScrollView>            
          </View>              
        </Modalize>
        
        {/*Modais do vidro*/}
        <Modalize
        ref={modalizeVisible3}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#006553'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#006553', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Vidro.png')}/>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>O que ?? o vidro?</Text> 
            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Atualmente o vidro possui uma import??ncia no dia-a-dia igual ao pl??stico, sua versatilidade ?? tanta que ele ?? 100% recicl??vel, ent??o qualquer tipo de copo, embalagem, garrafas inteiros ou quebrados, podem ser reciclados. {'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Pode acabar cortando as pessoas causando infec????es; {'\n'}
            ???	Demora entre 4 mil a 1 milh??o de anos para se decompor; {'\n'}
            ???	N??o reduz a alta extra????o legal e ilegal da areia para sua produ????o. {'\n'}
            </Text>
            </ScrollView> 
          </View>               
        </Modalize>

        <Modalize
        ref={modalizeVisible4}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#006553'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#006553', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Vidro.png')}/>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como descartar o vidro?</Text>          
            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Para que n??o haja risco de corte, coloque os peda??os de vidro dentro de uma caixinha, ou ent??o embrulhe em folhas de jornal; {'\n'}
            ???	Coloque-o no lixo seco e, se poss??vel, identifique que o conte??do ?? vidro com uma etiqueta. {'\n'}
            </Text>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como ?? Feita a Reciclagem:</Text>
            <Text style={{color:'white', textAlign:'justify'}}>
            ???	O vidro ?? lavado para retirar os res??duos e em seguida triturado; {'\n'}
            ???	J?? em formato de cacos, ?? aquecido e fundido numa temperatura acima de 1300??C, possibilitando a modelagem de novos copos, garrafas e etc.{'\n'} {'\n'}
            </Text>    
            </ScrollView> 
          </View>            
        </Modalize>

        {/*Modais do aluminio*/}
        <Modalize
        ref={modalizeVisible5}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#FABA32'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#FABA32', height:700}]}>                
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/aluminio.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>O que ?? o alum??nio?</Text>
            <Text style={{color:'white', textAlign:'justify'}}>
            ???	O alum??nio ?? um dos materiais mais abundantes no planeta, isso reflete-se na sua viabilidade econ??mica tanto que qualquer alum??nio pode ser reciclado. {'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problema do descarte indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>                    
            ???	Assim como o pl??stico, pode gerar enchentes que tiram a moradia das pessoas; {'\n'} 
            ???	Recipientes com res??duos podem atrair animais transmissores de doen??as. {'\n'} 
            </Text>    
            </ScrollView> 
          </View>            
        </Modalize>

        <Modalize
        ref={modalizeVisible6}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#FABA32'}}
        >
          <View style={[styles.modalContainer, {backgroundColor:'#FABA32', height:700}]}>                
            <ScrollView style={{marginBottom:10}}>
              <Image style={styles.imgModal} source={require('../../imagens/aluminio.png')}/>                
              <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como descartar o alum??nio?</Text>
              <Text style={{color:'white', textAlign:'justify'}}>
              ???	Deve-se higienizar o alum??nio e colocar ele no lixo seco. Caso n??o seja poss??vel, descarte no lixo normal.{'\n'} 
              </Text> 
                        
              <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como ?? feita a reciclagem:</Text> 

              <Text style={{color:'white', textAlign:'justify'}}>
              ???	O alum??nio ?? separado das impurezas, para ent??o ser picado, prensado e compactado. {'\n'}
              ???	Fundido ?? 700??C, seu estado l??quido ?? transformado em chapas para produzir novas latinhas e outros objetos. {'\n'} {'\n'}
              </Text>    
            </ScrollView>   
          </View>             
        </Modalize>

        {/*Modais do papel*/}
        <Modalize
        ref={modalizeVisible7}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#003E65'}}
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#003E65', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Papel.png')}/>                
            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Qual papel ?? recicl??vel?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>    
            ???	Quando falamos de pap??is n??o recicl??veis temos adesivos, fita crepe, papel higi??nico, papel toalha, etiquetas. {'\n'}
            ???	Podemos citar como recicl??veis aparas de papel, papel??o, cartolinas, cart??es, fotoc??pias e etc.{'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}> 
            ???	Papeis mais resistentes como panfletos podem entupir bueiros, gerando enchentes;{'\n'}
            ???	Se o papel n??o for rasgado para ir ao lixo, dados pessoais podem vazar.{'\n'}
            </Text>
            </ScrollView>
          </View>           
        </Modalize>

        <Modalize
        ref={modalizeVisible8}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#003E65'}}
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#003E65', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Papel.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como reciclar o papel?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Lembrando que nem todos os tipos de papel podem ser reciclados, apenas os que est??o limpos e secos. {'\n'}
            ???	Separando-os dos demais res??duos, basta rasga-los em peda??os e coloca-los no lixo seco. {'\n'}
            </Text> 

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como ?? Feita a Reciclagem:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Para produzir papel novo, as fibras velhas do papel s??o misturadas com fibras novas, gerando uma pasta; {'\n'}
            ???	Essa pasta ?? refinada para ter maior qualidade e resist??ncia, tendo o seu fim como um material seco e formatado para retornar ao mercado. {'\n'} {'\n'}
            </Text>    
            </ScrollView> 
          </View>           
        </Modalize>

        {/*Modais do Lixo org??nico*/}
        <Modalize
        ref={modalizeVisible9}
        modalHeight={700}    
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#604033'}}    
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#604033', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Organica.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>O que ?? o lixo org??nico?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Lixo org??nico ?? todo res??duo gerado por um ser vivo, ou seja, pode ser de origem vegetal ou animal; {'\n'}
            ???	Temos como exemplo restos de verduras, legumes, frutas e outros tipos de alimentos. {'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            ???	S??o os res??duos que mais atraem animais transmissores de doen??as; {'\n'}
            ???	Causam um mau cheiro tremendo. 
            </Text>    
            </ScrollView>  
          </View>           
        </Modalize>

        <Modalize
        ref={modalizeVisible10}
        modalHeight={700}     
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#604033'}}       
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#604033', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Organica.png')}/>                
            <Text style={{color:'white', fontSize:18, marginBottom:5, fontWeight:'bold'}}>Como descartar o lixo org??nico?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>
            ???	O lixo org??nico n??o pode ser misturado com o lixo seco, pois o chorume solto ?? um l??quido poluente resultado da decomposi????o dos res??duos org??nicos; {'\n'}
            ???	Por isso, ele deve ser descartado no lixo comum, ou ent??o, usado para fazer a compostagem. {'\n'} 
            </Text> 

            <Text style={{color:'white', fontSize:18, marginBottom:5, fontWeight:'bold'}}>Como ?? feita a reciclagem?</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Para realizar a compostagem s??o necess??rias 3 caixas pl??sticas empilhadas em n??veis diferentes, sendo que nas 2 superiores devem haver pequenos furos; {'\n'}
            ???	A caixa do topo deve ser forrada com folhas secas, em seguida com terras e minhocas, e por cima os res??duos org??nicos; {'\n'}
            ???	Quando a do topo estiver cheia, sua posi????o deve ser trocada com a do meio, j?? a ??ltima caixa serve para coletar o l??quido org??nico.
            </Text>    
            </ScrollView>
          </View>           
        </Modalize>

        {/*Modais do Lixo Eletr??nico*/}
        <Modalize
        ref={modalizeVisible11}
        modalHeight={700}        
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#647681'}}    
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#647681', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Eletronico.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}> O que ?? lixo eletr??nico?</Text>      
            <Text style={{color:'white', textAlign:'justify'}}>
            Podemos dividir esse lixo em 4 categorias b??sicas para reciclagem:{'\n'}
            ???	Grandes equipamentos como geladeiras, micro-ondas, TVs e etc.;    {'\n'} 
            ???	Pequenos equipamentos e eletro-port??teis como torradeiras, ventiladores, r??dios e etc;   {'\n'}
            ???	Equipamentos de Inform??tica como computadores, celulares, notebooks e etc.; {'\n'}
            ???	Pilhas e bateria port??teis. {'\n'}
            </Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Problemas do Descarte Indevido:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Por conterem variadas subst??ncias t??xicas, eles podem contaminar o solo e os len????is fre??ticos e colocar em risco a sa??de; {'\n'}
            ???	Os outros componentes como o pl??stico presentes nesses equipamentos, podem poluir o meio ambiente. {'\n'}
            </Text>
            </ScrollView>
          </View>          
        </Modalize>

        <Modalize
        ref={modalizeVisible12}
        modalHeight={700}       
        modalStyle={{width:370, alignSelf:'center', backgroundColor:'#647681'}}    
        >
          <View  style={[styles.modalContainer, {backgroundColor:'#647681', height:700}]}>
            <ScrollView style={{marginBottom:10}}>
            <Image style={styles.imgModal} source={require('../../imagens/Eletronico.png')}/>                
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como descartar o lixo eletr??nico?</Text>              
            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Basta levar o lixo em pontos de descarte, voc?? pode encontra-los no site https://greeneletron.org.br/ e com exce????o de l??mpadas,  eletr??nicos e pilhas podem ser reciclados. {'\n'}
            </Text>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Como ?? feita a reciclagem:</Text>

            <Text style={{color:'white', textAlign:'justify'}}>
            ???	Equipamentos eletr??nicos s??o feitos de diversos componentes diferentes, portanto, os aparelhos s??o desmontados e suas pe??as s??o separadas; {'\n'}
            ???	J?? separadas de acordo com suas caracter??sticas, tem destina????es corretas para que n??o afetem o meio ambiente, al??m de n??o serem limitadas na reciclagem apenas para fabricar novos eletr??nicos.
            </Text>    
            </ScrollView> 
          </View>           
        </Modalize>
    </View>
    </GestureHandlerRootView>
  );
}

{/*Estilos*/}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoLixo:{
    width: 350, 
    height:180,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:10
  },
  modalizeEstilo:{
    
  },
  modalContainer:{
    padding:10,
    borderRadius:20,
    flex:1
  },
  header:{
    alignItems:'center',
    flexWrap:'wrap',
    marginBottom:20,
    marginTop:40
  },
  imgInfo:{
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    left:10
  },
  botao:{
    flexDirection:'row', 
    marginTop:10, 
    backgroundColor:'white', 
    width:70, 
    height:30, 
    alignItems:'center',
    borderRadius:10,
    justifyContent:'center',
    marginBottom:10,
  },
  titulo:{
    fontSize:18,
    color:'white'
  },
  botaoModal:{
    backgroundColor:'white',
    alignItems:'center',
    width:130,
    padding:3,
    borderRadius:20,
    alignSelf:'center'
  },
  botaoReciclar:{
    backgroundColor:'white',
    alignItems:'center',
    width:170, 
    height:30, 
    borderRadius:20,
    marginTop:2,
    position:'absolute',
    right:1,
    justifyContent:'center'
  }, 
  imgModal:{
    width:350, 
    height:210, 
    resizeMode:'stretch',
    alignSelf:'center',
    marginBottom:10
  }
});