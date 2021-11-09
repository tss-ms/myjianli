import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Img from './img/touxiang.png';
import Img1 from './img/youxiang.png';
import Img2 from './img/xiangji.png';
import Img3 from './img/weixin.png';
import Img4 from './img/weibo.png';
import Img5 from './img/dianhua.png';
import img from './img/ying.png';
import img1 from './img/huihua.png';
import img2 from './img/lvxing.png';
import img3 from './img/yinyue.png';
const jianli = (
    <div className="one">
         <div className="two">
              <div className="two1">
                      <img  src={Img} className="img1"></img>
                      <div className="two2">
                           <h2 className="hh1">软 件 工 程</h2>
                           <h2>SOFTWARE</h2>
                           <h2>ENGINEERING</h2>
                      </div>
              </div>
              <div className="two3">
                   <h2 className="hh">P R O F I L E</h2>
                   <h1 className="hh">李 琦</h1>
                   <h3 className="pp">男</h3>
                   <h3 className="pp">上海</h3>
                   <h3 className="pp">1993.10.21</h3>
              </div>
              <div className="two4">
                   <div className="jingli">
                        <h2 className="jingli-h2">教 育 经 历</h2>
                        <p className="jingli-h2">E D U C A T I O N B A C K G R O U N D</p>
                        <div className="daxue">
                             <span className="dian dian1"></span>
                             <span className="dian dian2"></span>
                             <h4 className="daxue1">上海觅知大学</h4>
                             <p className="pp2"><strong>软件工程 | 本科 </strong><span> 2012.09 - 2016.07</span></p>
                             <h4 className="daxue1">主修课程：</h4>
                             <p className="pp2">C/C++程序设计、Java程序设计、数据结构、计算方法、编译原理、软件工程、操作系统原理、数据库系统原理、网咯数据库等。</p>
                             <p className="pp3">GPA: 3.8/4.0 在校四年均保持排名位于专业前10%</p>
                        </div>
                   </div>
                   <div className="jingli working">
                        <h2 className="jingli-h2">工 作 经 历</h2>
                        <p className="jingli-h2">W O R K E X P E R I E N C E</p>
                        <div className="daxue">
                             <span className="dian dian1"></span>
                             <span className="dian dian2"></span>
                             <span className="dian dian3"></span>
                             <span className="dian dian4"></span>
                             <h4 className="daxue1">觅知办公有限公司</h4>
                             <p className="pp2"><strong>Java工程师  </strong><span> 2016.09 - 2019.07</span></p>
                             <p className="pp4">根据产品需求，完成项目的任务分析设计，完成详细设计和编码，确保项目进度和质量</p>
                             <p className="pp4">负责后端API设计和开发维护，从构思到执行，编写架构性好的后端代码</p>
                             <p className="pp4">协助其他人员开发测试，完成测试阶段的BUG修改</p>
                        </div>
                   </div>
              </div>
         </div> 
         <div className="three">
              <div className="three1">
                   <h2 className="hh1 shejiao">联 系 方 式 / 社 交 媒 体</h2>
                   <p className="xinxi"> 
                   <span className="zz"></span> <img  src={Img1} className="img2"/> Cilyeng@hotmail.com    
                   <span className="zz"></span> <img  src={Img2} className="img2"/> 135666667573 </p>
                   <p className="xinxi"> 
                   <span className="zz"></span> <img  src={Img3} className="img2"/>  yd_1116  
                   <span className="zz"></span> <img  src={Img4} className="img2"/>  @unloooedDoor 
                   <span className="zz"></span> <img  src={Img5} className="img2"/>  @xuelang</p>
               </div>
               <div className="three2">
               <h2 className="hh1 shejiao">A B O U T M E</h2>
               <p className="cc">软件工程专业背景,有丰富的软件开发经历,扎实的技术基础;工作细致认真,积极主动,有耐心,严谨;有较强的的逻辑思维能力,善于分析、归纳、解决问题;有较强的的沟通技巧及团队合作精神,组织协调能力,较强的责任感及进取精神;对技术有浓厚兴趣,喜欢并不断的学习新技术。</p>
               </div>
               <div className="three2">
                  <h2 className="cc cc2">专 业 技 能 <span className="cc1">S K I L L S</span></h2>
                  <progress value="95" max="100" className="cc3"></progress> <span className="sa">Java/JavaScript</span>
                  <progress value="90" max="100" className="cc3"></progress> <span className="sa">Spring</span>
                  <progress value="85" max="100" className="cc3"></progress> <span className="sa">MyBatis</span>
                  <p className="clas">熟悉数据库原理和常用性能优化技术，以及NoSQL，Queue的原理、使用场景及限制</p>
               </div>
               <div className="three2">
                  <h2 className="cc cc2">语 言 技 能 <span className="cc1">L A N G U A G E</span></h2>
                  <progress value="95" max="100" className="cc3"></progress> <span className="sa">英语</span>
                  <progress value="90" max="100" className="cc3"></progress> <span className="sa">西班牙语</span>
                  <p className="clas">全国计算机等级二级</p>
               </div>
               <div className="three2">
                  <h2 className="cc cc2">项 目 荣 誉 <span className="cc1">A W A R D S</span></h2>
                  <p className="clas1">IOI 2019 <span className="clas">Gold</span></p>
                  <p className="clas1">AP Computer Science A <span className="clas">5</span></p>
               </div>
               <div className="three2">
                  <h2 className="cc cc2">兴 趣 爱 好 <span className="cc1">H O B B I E S</span></h2>
                  <img  src={img} className="img3"/>
                  <img  src={img1} className="img3"/>
                  <img  src={img2} className="img3"/>
                  <img  src={img3} className="img3"/>
                  <p><span className="nn">摄影</span><span className="nn1">绘画</span><span className="nn1">旅行</span><span className="nn1">音乐</span></p>
               </div>
          </div> 
    </div>
);

ReactDOM.render(jianli,document.getElementById('root'));



