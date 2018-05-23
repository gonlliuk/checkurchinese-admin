webpackJsonp([1],{0:function(t,e,n){t.exports=n("NHnr")},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("tvR6");var s=n("7+uW"),a=n("zL8q"),i=n.n(a),o=n("Biqn"),r=n.n(o),l=(n("MfeA"),n("VjuZ"),n("NYxO")),c=/(?!^\/[\w\d]+)(\/[\w\d]+)/g,u={data:function(){return{tabs:[{label:"Разделы",link:"/pages"},{label:"Блоки",link:"/blocks"},{label:"Задания",link:"/tasks"}]}},computed:{activeTab:function(){return this.$route.path.replace(c,"")},isTabDisabled:function(){return!!this.$route.path.match(c)}},methods:r()({},Object(l["b"])("pages",["getPages"]),Object(l["b"])("blocks",["getBlocks"]),Object(l["b"])("tasks",["getTasks"]),{handleTabClick:function(t){this.$router.push({path:this.tabs[t.index].link})}}),created:function(){this.getPages(),this.getBlocks(),this.getTasks()}},d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("h1",[t._v("CheckUrChinese Admin Page")])])],1),n("el-main",{staticStyle:{"max-width":"960px","min-width":"640px"}},[n("el-tabs",{attrs:{type:"card","active-name":t.activeTab},on:{"tab-click":t.handleTabClick}},t._l(t.tabs,function(e){return n("el-tab-pane",{key:e.id,attrs:{disabled:t.isTabDisabled,name:e.link,label:e.label}})})),n("router-view")],1)],1)},p=[],m=n("XyMi"),f=!1,h=null,g=null,k=null,v=Object(m["a"])(u,d,p,f,h,g,k),b=v.exports,y={data:function(){return{formName:"form",form:{email:"",password:""},rules:{email:[{required:!0,message:"Ввевидте email",trigger:"blur"}],password:[{required:!0,message:"Ввевидте пароль",trigger:"blur"}]}}},methods:r()({},Object(l["b"])("user",["signIn"]),{signInHandler:function(){var t=this;this.$refs[this.formName].validate(function(e){e&&t.signIn(t.form)})}})},w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("h1",[t._v("Login Page")])])],1),n("el-main",[n("el-row",{staticStyle:{"margin-top":"200px"},attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:20,sm:16,md:10,lg:6}},[n("el-form",{ref:"form",attrs:{model:t.form,"label-position":"left","label-width":"100px",rules:t.rules}},[n("el-form-item",{attrs:{label:"Email",prop:"email"}},[n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),n("el-form-item",{attrs:{label:"Пароль",prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1)],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:10,sm:6,md:4,lg:2}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){t.signInHandler()}}},[t._v("\n                    Войти\n                ")])],1)],1)],1)],1)},x=[],T=!1,_=null,$=null,B=null,E=Object(m["a"])(y,w,x,T,_,$,B),S=E.exports,j=n("/ocq"),I={},P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},H=[],O=!1,C=null,F=null,N=null,q=Object(m["a"])(I,P,H,O,C,F,N),R=q.exports,Q=(n("SldL"),n("7hDC")),U=n.n(Q),z={data:function(){return{selectedId:null,loading:!1}},computed:r()({},Object(l["d"])("pages",["pages"])),methods:r()({},Object(l["b"])("pages",["getPages","setSelectedPage"]),{edit:function(){var t=U()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setSelectedPage(e);case 2:this.$router.push("/pages/edit");case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),create:function(){var t=U()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setSelectedPage(null);case 2:this.$router.push("/pages/create");case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),created:function(){var t=this,e=setTimeout(function(){t.loading=!0},300);this.getPages().catch(function(e){t.$notify({title:"Error",type:"error",message:"".concat(e.message,": ").concat(e.response.data),duration:0})}).finally(function(){clearTimeout(e),t.loading=!1})}},A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("el-row",{directives:[{name:"show",rawName:"v-show",value:!t.pages.length,expression:"!pages.length"}],attrs:{gutter:40}},[n("el-col",{attrs:{span:12}},[n("h4",[t._v("Пока не создано ни одного раздела")])])],1),n("el-row",{directives:[{name:"show",rawName:"v-show",value:t.pages.length,expression:"pages.length"}],staticStyle:{"margin-bottom":"20px"},attrs:{gutter:40}},[n("el-col",[n("h3",[t._v("Разделы: ")]),t._l(t.pages,function(e){return n("div",{key:e.id,staticStyle:{padding:"10px","font-size":"17px"}},[n("span",[t._v(t._s(e.title))]),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(n){t.edit(e.id)}}})],1)})],2)],1),n("el-row",{attrs:{gutter:40}},[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.create()}}},[t._v("Создать раздел")])],1)],1)],1)},L=[],D=!1,V=null,M=null,J=null,W=Object(m["a"])(z,A,L,D,V,M,J),X=W.exports,Z={data:function(){return{selectedId:null,loading:!1}},computed:r()({},Object(l["d"])("blocks",["blocks"])),methods:r()({},Object(l["b"])("blocks",["getBlocks","setSelectedBlock"]),{edit:function(){var t=U()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setSelectedBlock(e);case 2:this.$router.push("/blocks/edit");case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),create:function(){var t=U()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setSelectedBlock(null);case 2:this.$router.push("/blocks/create");case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),created:function(){var t=this,e=setTimeout(function(){t.loading=!0},300);this.getBlocks().catch(function(e){t.$notify({title:"Error",type:"error",message:"".concat(e.message,": ").concat(e.response.data),duration:0})}).finally(function(){clearTimeout(e),t.loading=!1})}},Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("el-row",{directives:[{name:"show",rawName:"v-show",value:!t.blocks.length,expression:"!blocks.length"}],attrs:{gutter:40}},[n("el-col",{attrs:{span:12}},[n("h4",[t._v("Пока не создано ни одного блока")])])],1),n("el-row",{directives:[{name:"show",rawName:"v-show",value:t.blocks.length,expression:"blocks.length"}],staticStyle:{"margin-bottom":"20px"},attrs:{gutter:40}},[n("el-col",[n("h3",[t._v("Блоки: ")]),t._l(t.blocks,function(e){return n("div",{key:e.id,staticStyle:{padding:"10px","font-size":"17px"}},[n("span",[t._v(t._s(e.title))]),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(n){t.edit(e.id)}}})],1)})],2)],1),n("el-row",{attrs:{gutter:40}},[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.create()}}},[t._v("Создать блок")])],1)],1)],1)},G=[],K=!1,tt=null,et=null,nt=null,st=Object(m["a"])(Z,Y,G,K,tt,et,nt),at=st.exports,it=(n("WpTh"),{data:function(){return{selectedId:null,loading:!1}},computed:r()({},Object(l["d"])("tasks",["tasks"]),Object(l["d"])("blocks",["blocks"])),methods:r()({},Object(l["b"])("tasks",["getTasks","setSelectedTask"]),{getBlockTitle:function(t){var e=this.blocks.find(function(e){return e.id===t});return e?e.title:"Блок не найден"},edit:function(){var t=U()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setSelectedTask(e);case 2:this.$router.push("/tasks/edit");case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),create:function(){var t=U()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setSelectedTask(null);case 2:this.$router.push("/tasks/create");case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),created:function(){var t=this,e=setTimeout(function(){t.loading=!0},300);this.getTasks().catch(function(e){t.$notify({title:"Error",type:"error",message:"".concat(e.message,": ").concat(e.response.data),duration:0})}).finally(function(){clearTimeout(e),t.loading=!1})}}),ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("el-row",{directives:[{name:"show",rawName:"v-show",value:!t.tasks.length,expression:"!tasks.length"}],attrs:{gutter:40}},[n("el-col",{attrs:{span:12}},[n("h4",[t._v("Пока не создано ни одного задания")])])],1),n("el-row",{directives:[{name:"show",rawName:"v-show",value:t.tasks.length,expression:"tasks.length"}],staticStyle:{"margin-bottom":"20px"},attrs:{gutter:40}},[n("el-col",[n("h3",[t._v("Задания: ")]),t._l(t.tasks,function(e){return n("div",{key:e.id,staticStyle:{padding:"10px","font-size":"17px"}},[n("span",[t._v(t._s(e.title)+" ("+t._s(t.getBlockTitle(e.blockId))+")")]),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(n){t.edit(e.id)}}})],1)})],2)],1),n("el-row",{attrs:{gutter:40}},[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.create()}}},[t._v("Создать задание")])],1)],1)],1)},rt=[],lt=!1,ct=null,ut=null,dt=null,pt=Object(m["a"])(it,ot,rt,lt,ct,ut,dt),mt=pt.exports,ft={name:"createEditPageComponent",props:["page","isEdit"],data:function(){return{loading:!1,formName:"form",form:this.page?{id:this.page.id,title:this.page.title}:{title:""},rules:{title:[{required:!0,message:"Ввевидте название раздела",trigger:"blur"},{max:100,message:"Название раздела должно содержать не более 100 символов",trigger:"blur"}]}}},computed:{title:function(){return this.isEdit?"Редактирование раздела":"Создание раздела"},button:function(){return this.isEdit?"Сохранить":"Создать"}},methods:r()({},Object(l["b"])("pages",["createPage","editPage","deletePage"]),{reset:function(){this.$refs[this.formName].resetFields()},close:function(){this.reset(),this.$router.push("/pages")},createHandler:function(){var t=this;this.$refs[this.formName].validate(function(e){if(e){var n=setTimeout(function(){t.loading=!0},300);(t.isEdit?t.editPage(t.form):t.createPage(t.form)).then(function(){t.$notify({title:"Success",type:"success",message:"Раздел успешно ".concat(t.isEdit?"сохранен":"создан")}),t.close()}).catch(function(e){t.$notify({title:"Error",type:"error",message:"".concat(e.message,": ").concat(e.response.data),duration:0})}).finally(function(){clearTimeout(n),t.loading=!1})}})},deleteHandler:function(){var t=this;this.$msgbox({title:"Удаление раздела",message:'Вы уверены что хотите удалить раздел "'.concat(this.page.title,'"?'),showCancelButton:!0,confirmButtonText:"Да",cancelButtonText:"Нет"}).then(function(){t.deletePage(t.page).then(function(){t.$notify({title:"Success",type:"success",message:'Раздел "'.concat(t.page.title,'" успешно удален')}),t.close()}).catch(function(e){t.$notify({title:"Error",type:"error",message:"".concat(e.message,": ").concat(e.response.data),duration:0})})})}})},ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(t._s(t.title))]),n("el-form",{ref:"form",attrs:{model:t.form,"label-position":"left","label-width":"150px",rules:t.rules}},[n("el-form-item",{attrs:{label:"Название раздела",prop:"title"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("el-col",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.createHandler()}}},[t._v(t._s(t.button))]),n("el-button",{on:{click:function(e){t.close()}}},[t._v("Отмена")])],1),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:function(e){t.deleteHandler()}}},[t._v("Удалить")])],1)],1)],1)},gt=[],kt=!1,vt=null,bt=null,yt=null,wt=Object(m["a"])(ft,ht,gt,kt,vt,bt,yt),xt=wt.exports,Tt={components:{CreateEditPageComponent:xt},props:{isEdit:{type:Boolean,default:!1}},computed:r()({},Object(l["c"])("pages",["selectedPage"])),mounted:function(){!this.selectedPage&&this.isEdit&&this.$router.push("/pages")}},_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CreateEditPageComponent",{attrs:{page:t.isEdit?t.selectedPage:null,"is-edit":t.isEdit}})],1)},$t=[],Bt=!1,Et=null,St=null,jt=null,It=Object(m["a"])(Tt,_t,$t,Bt,Et,St,jt),Pt=It.exports,Ht={props:["block","isEdit"],data:function(){return{loading:!1,formName:"form",form:this.block?{id:this.block.id,title:this.block.title,pageId:this.block.pageId}:{title:"",pageId:null},rules:{title:[{required:!0,message:"Ввевидте название блока",trigger:"blur"},{max:100,message:"Название блока должно содержать не более 100 символов",trigger:"blur"}],pageId:[{required:!0,message:"Выберите раздел",trigger:"blur"}]}}},computed:r()({},Object(l["d"])("pages",["pages"]),{title:function(){return this.isEdit?"Редактирование блока":"Создание блока"},button:function(){return this.isEdit?"Сохранить":"Создать"}}),methods:r()({},Object(l["b"])("blocks",["createBlock","editBlock","deleteBlock"]),{reset:function(){this.$refs[this.formName].resetFields()},close:function(){this.reset(),this.$router.push("/blocks")},createHandler:function(){var t=this;this.$refs[this.formName].validate(function(e){if(e){var n=setTimeout(function(){t.loading=!0},300);(t.isEdit?t.editBlock(t.form):t.createBlock(t.form)).then(function(){t.$notify({title:"Success",type:"success",message:"Блок успешно ".concat(t.isEdit?"сохранен":"создан")}),t.close()}).catch(function(e){t.$notify({title:"Error",type:"error",message:"".concat(e.message,": ").concat(e.response.data),duration:0})}).finally(function(){clearTimeout(n),t.loading=!1})}})},deleteHandler:function(){var t=this;this.$msgbox({title:"Удаление блока",message:'Вы уверены что хотите удалить блок "'.concat(this.block.title,'"?'),showCancelButton:!0,confirmButtonText:"Да",cancelButtonText:"Нет"}).then(function(){t.deleteBlock(t.block).then(function(){t.$notify({title:"Success",type:"success",message:'Блок "'.concat(t.block.title,'" успешно удален')}),t.close()}).catch(function(e){t.$notify({title:"Error",type:"error",message:"".concat(e.message,": ").concat(e.response.data),duration:0})})})}})},Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(t._s(t.title))]),n("el-form",{ref:"form",attrs:{model:t.form,"label-position":"left","label-width":"150px",rules:t.rules}},[n("el-form-item",{attrs:{label:"Название блока",prop:"title"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"Раздел",prop:"pageId"}},[n("el-select",{attrs:{placeholder:"Выберите раздел"},model:{value:t.form.pageId,callback:function(e){t.$set(t.form,"pageId",e)},expression:"form.pageId"}},t._l(t.pages,function(t){return n("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1)],1),n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("el-col",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.createHandler()}}},[t._v(t._s(t.button))]),n("el-button",{on:{click:function(e){t.close()}}},[t._v("Отмена")])],1),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:function(e){t.deleteHandler()}}},[t._v("Удалить")])],1)],1)],1)},Ct=[],Ft=!1,Nt=null,qt=null,Rt=null,Qt=Object(m["a"])(Ht,Ot,Ct,Ft,Nt,qt,Rt),Ut=Qt.exports,zt={components:{CreateEditBlockComponent:Ut},props:{isEdit:{type:Boolean,default:!1}},computed:r()({},Object(l["c"])("blocks",["selectedBlock"])),mounted:function(){!this.selectedBlock&&this.isEdit&&this.$router.push("/blocks")}},At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CreateEditBlockComponent",{attrs:{block:t.isEdit?t.selectedBlock:null,"is-edit":t.isEdit}})],1)},Lt=[],Dt=!1,Vt=null,Mt=null,Jt=null,Wt=Object(m["a"])(zt,At,Lt,Dt,Vt,Mt,Jt),Xt=Wt.exports,Zt=(n("EuXz"),function(t){return JSON.parse(JSON.stringify(t))}),Yt={url:""},Gt={answer:"",isCorrect:!1},Kt={question:"",answers:[Zt(Gt)]},te={description:"",videos:[],images:[],test:[],checkTestByBtn:!0},ee={props:["task","isEdit"],data:function(){return{loading:!1,taskForm:this.task?{id:this.task.id,title:this.task.title,blockId:this.task.blockId,text:this.task.text,additionalQuestion:this.task.additionalQuestion,comment:this.task.comment,questions:this.task.questions}:{title:"",blockId:null,text:"",additionalQuestion:"",comment:"",questions:[]},taskRules:{title:[{required:!0,message:"Ввевидте название задания",trigger:"blur"},{max:100,message:"Название задания должно содержать не более 100 символов",trigger:"blur"}],blockId:[{required:!0,message:"Выберите раздел",trigger:"blur"}],text:[],additionalQuestion:[],comment:[]},testRules:{question:[{required:!0,message:"Ввевидте вопрос",trigger:"blur"}]},answerRules:{answer:[{required:!0,message:"Ввевидте ответ",trigger:"blur"}]}}},computed:r()({},Object(l["d"])("blocks",["blocks"]),{title:function(){return this.isEdit?"Редактирование задания":"Создание задания"},button:function(){return this.isEdit?"Сохранить":"Создать"}}),methods:r()({},Object(l["b"])("tasks",["createTask","editTask","deleteTask"]),{deleteTestHandler:function(t){this.$msgbox({title:"Удаление теста",message:"Вы уверены что хотите удалить тест целиком????",showCancelButton:!0,confirmButtonText:"Да",cancelButtonText:"Нет"}).then(function(){t.test=[]})},addTestQuestionHandler:function(t){t.push(Zt(Kt))},deleteTestQuestionHandler:function(t,e){this.$msgbox({title:"Удаление вопроса",message:"Вы уверены что хотите удалить вопрос из теста?",showCancelButton:!0,confirmButtonText:"Да",cancelButtonText:"Нет"}).then(function(){t.splice(e,1)})},addAnswerHandler:function(t){t.push(Zt(Gt))},deleteAnswerHandler:function(t,e){this.$msgbox({title:"Удаление вопроса",message:"Вы уверены что хотите удалить ответ на вопрос из теста?",showCancelButton:!0,confirmButtonText:"Да",cancelButtonText:"Нет"}).then(function(){t.splice(e,1)})},filesChangeHandler:function(t,e,n){var s=new FileReader;s.onload=function(){n.images.push({name:t.raw.name,type:t.raw.type,size:t.raw.size,uid:t.raw.uid,data:s.result})},s.readAsDataURL(t.raw)},filesDeleteHandler:function(t,e,n){n.images=n.images.filter(function(e){return e.uid!==t.uid})},addVideoHandler:function(t){t.push(Zt(Yt))},addQuestionHandler:function(t){t.push(Zt(te))},removeVideoHandler:function(t,e){t.splice(e,1)},deleteQuestionHandler:function(t,e){this.$msgbox({title:"Удаление вопроса",message:"Вы уверены что хотите удалить вопрос?",showCancelButton:!0,confirmButtonText:"Да",cancelButtonText:"Нет"}).then(function(){t.splice(e,1)})},reset:function(){this.$refs.taskForm.resetFields()},close:function(){this.reset(),this.$router.push("/tasks")},createEditHandler:function(){var t=this;this.$refs.taskForm.validate(function(e){if(e){var n=setTimeout(function(){t.loading=!0},300);(t.isEdit?t.editTask(t.taskForm):t.createTask(t.taskForm)).then(function(){t.$notify({title:"Success",type:"success",message:"Задание успешно ".concat(t.isEdit?"сохранено":"создано")}),t.close()}).catch(function(e){t.$notify({title:"Error",type:"error",message:"".concat(e.message,": ").concat(e.response.data),duration:0})}).finally(function(){clearTimeout(n),t.loading=!1})}})},deleteHandler:function(){var t=this;this.$msgbox({title:"Удаление заданиея",message:'Вы уверены что хотите удалить задание "'.concat(this.task.title,'"?'),showCancelButton:!0,confirmButtonText:"Да",cancelButtonText:"Нет"}).then(function(){t.deleteTask(t.task).then(function(){t.$notify({title:"Success",type:"success",message:'Задание "'.concat(t.task.title,'" успешно удалено')}),t.close()}).catch(function(e){t.$notify({title:"Error",type:"error",message:"".concat(e.message,": ").concat(e.response.data),duration:0})})})}})},ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.title))]),n("el-form",{ref:"taskForm",attrs:{model:t.taskForm,"label-position":"left","label-width":"150px",rules:t.taskRules}},[n("el-collapse",[n("el-collapse-item",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("h2",[t._v("Основное")])]),n("el-form-item",{attrs:{label:"Название задания",prop:"title"}},[n("el-input",{model:{value:t.taskForm.title,callback:function(e){t.$set(t.taskForm,"title",e)},expression:"taskForm.title"}})],1),n("el-form-item",{attrs:{label:"Блок",prop:"blockId"}},[n("el-select",{attrs:{placeholder:"Выберите блок"},model:{value:t.taskForm.blockId,callback:function(e){t.$set(t.taskForm,"blockId",e)},expression:"taskForm.blockId"}},t._l(t.blocks,function(t){return n("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1),n("el-form-item",{attrs:{label:"Основной текст",prop:"text"}},[n("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.taskForm.text,callback:function(e){t.$set(t.taskForm,"text",e)},expression:"taskForm.text"}})],1),n("el-form-item",{attrs:{label:"Дополнительные вопросы",prop:"additionalQuestion"}},[n("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.taskForm.additionalQuestion,callback:function(e){t.$set(t.taskForm,"additionalQuestion",e)},expression:"taskForm.additionalQuestion"}})],1),n("el-form-item",{attrs:{label:"Комментарии",prop:"comment"}},[n("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.taskForm.comment,callback:function(e){t.$set(t.taskForm,"comment",e)},expression:"taskForm.comment"}})],1)],2),n("el-collapse-item",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("h2",[t._v("Вопросы")])]),t._l(t.taskForm.questions,function(e,s){return n("el-row",{key:e.id,staticStyle:{"margin-left":"30px"},attrs:{type:"flex",align:"top"}},[n("el-col",{attrs:{span:22}},[n("el-collapse",[n("el-collapse-item",[n("template",{slot:"title"},[n("h2",[t._v(t._s(s+1)+":")])]),n("el-form-item",{attrs:{label:"Описание вопроса"}},[n("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.description,callback:function(n){t.$set(e,"description",n)},expression:"question.description"}})],1),n("h3",[t._v("Видео:")]),t._l(e.videos,function(s,a){return n("el-form-item",{key:a,attrs:{label:"Ссылка на видео "+(a+1)}},[n("el-row",{attrs:{type:"flex"}},[n("el-col",[n("el-input",{model:{value:s.url,callback:function(e){t.$set(s,"url",e)},expression:"video.url"}})],1),n("el-col",[n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger",icon:"el-icon-delete",circle:"",title:"Удалить Видео"},on:{click:function(n){t.removeVideoHandler(e.videos,a)}}})],1)],1)],1)}),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:"",title:"Добавить еще"},on:{click:function(n){t.addVideoHandler(e.videos)}}}),n("h3",[t._v("Картинки:")]),n("el-upload",{ref:"upload",refInFor:!0,staticStyle:{"margin-top":"20px"},attrs:{action:"",multiple:!0,"auto-upload":!1,"file-list":e.images,"on-change":function(n,s){return t.filesChangeHandler(n,s,e)},"on-remove":function(n,s){return t.filesDeleteHandler(n,s,e)},"list-type":"text"}},[n("el-button",{attrs:{type:"primary",circle:"",title:"Загрузить картинки",icon:"el-icon-upload"}})],1),n("el-row",{directives:[{name:"show",rawName:"v-show",value:e.test.length,expression:"question.test.length"}],staticStyle:{"margin-top":"20px"},attrs:{type:"flex",align:"top"}},[n("el-col",{attrs:{span:22}},[n("el-collapse",[n("el-collapse-item",[n("template",{slot:"title"},[n("h3",[t._v("Тест:")])]),n("el-form-item",{attrs:{label:"Проверка теста по кнопке"}},[n("el-checkbox",{model:{value:e.checkTestByBtn,callback:function(n){t.$set(e,"checkTestByBtn",n)},expression:"question.checkTestByBtn"}})],1),t._l(e.test,function(s,a){return n("div",{key:s.id,staticStyle:{"margin-left":"30px"}},[n("el-row",{attrs:{type:"flex",align:"top"}},[n("el-col",{attrs:{span:22}},[n("el-collapse",[n("el-collapse-item",[n("template",{slot:"title"},[n("h3",[t._v("Вопрос: "+t._s(a+1))])]),n("el-form-item",{attrs:{label:"Вопрос"}},[n("el-input",{attrs:{type:"textarea",rows:2},model:{value:s.question,callback:function(e){t.$set(s,"question",e)},expression:"testItem.question"}})],1),n("h3",[t._v("Ответы:")]),t._l(s.answers,function(e,a){return n("div",{key:e.id},[n("el-row",{attrs:{type:"flex",align:"top"}},[n("el-col",{attrs:{span:22}},[n("el-form-item",{attrs:{label:"Ответ "+(a+1)}},[n("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"answer.answer"}})],1),n("el-form-item",{attrs:{label:"Правильный ответ"}},[n("el-checkbox",{model:{value:e.isCorrect,callback:function(n){t.$set(e,"isCorrect",n)},expression:"answer.isCorrect"}})],1)],1),n("el-col",{attrs:{span:2}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:s.answers.length>1,expression:"testItem.answers.length > 1"}],staticStyle:{"margin-left":"20px"},attrs:{type:"danger",circle:"",title:"Удалить ответ",icon:"el-icon-delete"},on:{click:function(e){t.deleteAnswerHandler(s.answers,a)}}})],1)],1)],1)}),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",plain:"",title:"Добавить ответ"},on:{click:function(e){t.addAnswerHandler(s.answers)}}},[t._v("\n                                                                        Добавить ответ\n                                                                    ")])],2)],1)],1),n("el-col",{attrs:{span:2}},[n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger",circle:"",title:"Удалить вопрос",icon:"el-icon-delete"},on:{click:function(n){t.deleteTestQuestionHandler(e.test,a)}}})],1)],1)],1)}),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",plain:"",title:"Добавить вопрос в тест"},on:{click:function(n){t.addTestQuestionHandler(e.test)}}},[t._v("\n                                                    Добавить вопрос в тест\n                                                ")])],2)],1)],1),n("el-col",{attrs:{span:2}},[n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger",circle:"",title:"Удалить тест",icon:"el-icon-delete"},on:{click:function(n){t.deleteTestHandler(e)}}})],1)],1),n("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.test.length,expression:"!question.test.length"}],staticStyle:{"margin-top":"20px"},attrs:{type:"primary",plain:"",title:"Добавить тест"},on:{click:function(n){t.addTestQuestionHandler(e.test)}}},[t._v("\n                                    Добавить тест\n                                ")])],2)],1)],1),n("el-col",{attrs:{span:2}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.taskForm.questions.length>1,expression:"taskForm.questions.length > 1"}],staticStyle:{"margin-top":"20px"},attrs:{type:"danger",circle:"",icon:"el-icon-delete",title:"Удалить вопрос"},on:{click:function(e){t.deleteQuestionHandler(t.taskForm.questions,s)}}})],1)],1)}),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"primary",plain:"",title:"Добавить вопрос"},on:{click:function(e){t.addQuestionHandler(t.taskForm.questions)}}},[t._v("\n                    Добавить вопрос\n                ")])],2)],1)],1),n("el-row",{staticStyle:{"margin-top":"30px"}},[n("el-col",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.createEditHandler()}}},[t._v(t._s(t.button))]),n("el-button",{on:{click:function(e){t.close()}}},[t._v("Отмена")])],1),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:function(e){t.deleteHandler()}}},[t._v("Удалить\n            ")])],1)],1)],1)},se=[],ae=!1,ie=null,oe=null,re=null,le=Object(m["a"])(ee,ne,se,ae,ie,oe,re),ce=le.exports,ue={components:{CreateEditTaskComponent:ce},props:{isEdit:{type:Boolean,default:!1}},computed:r()({},Object(l["c"])("tasks",["selectedTask"])),mounted:function(){!this.selectedTask&&this.isEdit&&this.$router.push("/tasks")}},de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CreateEditTaskComponent",{attrs:{task:t.isEdit?t.selectedTask:null,"is-edit":t.isEdit}})],1)},pe=[],me=!1,fe=null,he=null,ge=null,ke=Object(m["a"])(ue,de,pe,me,fe,he,ge),ve=ke.exports;s["default"].use(j["a"]);var be={app:new j["a"]({mode:"history",routes:[{path:"/pages",component:R,children:[{path:"/",name:"pages",component:X},{path:"create",name:"createPage",component:Pt,props:{isEdit:!1}},{path:"edit",name:"editPage",component:Pt,props:{isEdit:!0}},{path:"*",redirect:"/pages"}]},{path:"/blocks",component:R,children:[{path:"/",name:"blocks",component:at},{path:"create",name:"createBlock",component:Xt,props:{isEdit:!1}},{path:"edit",name:"editBlock",component:Xt,props:{isEdit:!0}},{path:"*",redirect:"/blocks"}]},{path:"/tasks",component:R,children:[{path:"/",name:"tasks",component:mt},{path:"create",name:"createTask",component:ve,props:{isEdit:!1}},{path:"edit",name:"editTask",component:ve,props:{isEdit:!0}},{path:"*",redirect:"/tasks"}]},{path:"*",redirect:"/pages"}]}),login:new j["a"]({mode:"history",routes:[{path:"*",redirect:"/login"},{path:"/login",name:"login"}]})},ye={apiURL:"https://checkurchinese-api.herokuapp.com/",tokenName:"token"},we=n("Z60a"),xe=n.n(we),Te=n("C9uT"),_e=n.n(Te),$e=n("mtWM"),Be=n.n($e),Ee=ye.apiURL,Se=ye.tokenName,je=window.localStorage.getItem(Se),Ie=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};xe()(this,t),this.http=Be.a.create({baseURL:Ee||e,headers:{common:r()({Authorization:je||""},n.common),post:r()({"Content-Type":"application/json"},n.post)}})}return _e()(t,[{key:"get",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.http.get(t,{params:e,headers:n}).then(function(t){return t.data})}},{key:"post",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.http.post(t,e,{params:n,headers:s}).then(function(t){return t.data})}},{key:"put",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.http.put(t,e,{params:n,headers:s}).then(function(t){return t.data})}},{key:"patch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.http.patch(t,e,{params:n,headers:s}).then(function(t){return t.data})}},{key:"delete",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.http.delete(t,{params:e,headers:n}).then(function(t){return t.data})}}]),t}(),Pe=new Ie,He={namespaced:!0,state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{setUser:function(t,e){var n=t.commit;n("setUser",e)},signIn:function(t,e){return Pe.post("/auth/in",e).then(function(t){window.localStorage.setItem(ye.tokenName,t),window.location="/"})}}},Oe=new Ie,Ce={namespaced:!0,state:{selectedPageId:null,pages:[]},getters:{selectedPage:function(t){return t.pages.find(function(e){return e.id===t.selectedPageId})}},mutations:{setPages:function(t,e){t.pages=e},setSelectedPage:function(t,e){t.selectedPageId=e}},actions:{setPages:function(t,e){var n=t.commit;n("setPages",e)},setSelectedPage:function(t,e){var n=t.commit;n("setSelectedPage",e)},getPages:function(t){var e=t.dispatch;return Oe.get("/page").then(function(t){e("setPages",t)})},createPage:function(t){var e=t.dispatch,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Oe.put("/page",n).then(function(){e("getPages")})},editPage:function(t){var e=t.dispatch,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.id,a=n.title;return Oe.patch("/page/".concat(s),{id:s,title:a}).then(function(){e("getPages")})},deletePage:function(t,e){var n=t.dispatch,s=e.id;return Oe.delete("/page/".concat(s)).then(function(){n("getPages")})}}},Fe=new Ie,Ne={namespaced:!0,state:{selectedBlockId:null,blocks:[]},getters:{selectedBlock:function(t){return t.blocks.find(function(e){return e.id===t.selectedBlockId})}},mutations:{setBlocks:function(t,e){t.blocks=e},setSelectedBlock:function(t,e){t.selectedBlockId=e}},actions:{setBlocks:function(t,e){var n=t.commit;n("setBlocks",e)},setSelectedBlock:function(t,e){var n=t.commit;n("setSelectedBlock",e)},getBlocks:function(t){var e=t.dispatch;return Fe.get("/block").then(function(t){e("setBlocks",t)})},createBlock:function(t){var e=t.dispatch,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Fe.put("/block",n).then(function(){e("getBlocks")})},editBlock:function(){var t=U()(regeneratorRuntime.mark(function t(e){var n,s,a,i,o,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,s=r.length>1&&void 0!==r[1]?r[1]:{},a=s.id,i=s.title,o=s.pageId,t.abrupt("return",Fe.patch("/block/".concat(a),{id:a,title:i,pageId:o}).then(function(){n("getBlocks")}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deleteBlock:function(t,e){var n=t.dispatch,s=e.id,a=e.pageId;return Fe.delete("/block/".concat(s,"/from/").concat(a)).then(function(){n("getBlocks")})}}},qe=new Ie,Re={namespaced:!0,state:{selectedTaskId:null,tasks:[]},getters:{selectedTask:function(t){return t.tasks.find(function(e){return e.id===t.selectedTaskId})}},mutations:{setTasks:function(t,e){t.tasks=e},setSelectedTask:function(t,e){t.selectedTaskId=e}},actions:{setTasks:function(t,e){var n=t.commit;n("setTasks",e)},setSelectedTask:function(t,e){var n=t.commit;n("setSelectedTask",e)},getTasks:function(t){var e=t.dispatch;return qe.get("/task").then(function(t){e("setTasks",t)})},createTask:function(t){var e=t.dispatch,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return qe.put("/task",n).then(function(){e("getTasks")})},editTask:function(){var t=U()(regeneratorRuntime.mark(function t(e){var n,s,a=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,s=a.length>1&&void 0!==a[1]?a[1]:{},t.abrupt("return",qe.patch("/task/".concat(s.id),s).then(function(){n("getTasks")}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deleteTask:function(t,e){var n=t.dispatch,s=e.id,a=e.taskId;return qe.delete("/task/".concat(s,"/from/").concat(a)).then(function(){n("getTasks")})}}};s["default"].use(l["a"]);var Qe=new l["a"].Store({modules:{user:He,pages:Ce,blocks:Ne,tasks:Re},state:{},mutations:{},actions:{}}),Ue=new Ie;s["default"].use(i.a),s["default"].config.productionTip=!1,Ue.get("/user").then(function(t){Qe.dispatch("user/setUser",t),new s["default"]({store:Qe,router:be.app,render:function(t){return t(b)}}).$mount("#app")}).catch(function(t){console.error(t),new s["default"]({store:Qe,router:be.login,render:function(t){return t(S)}}).$mount("#app")})},tvR6:function(t,e){}},[0]);
//# sourceMappingURL=app.fc47e7d1.js.map