import Comment from "@/components/Comment";

export default function Experience() {
    return (
        <>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'/>
            <title>个人经历</title>
            <meta name='keywords' content="个人经历"/>
            <meta name='description' content="个人经历"/>
            <div className="w-full">
                {/*<div className="bg-white bg-opacity-80">*/}
                <div className="relative w-full h-25rem bg-no-repeat bg-cover bg-center"
                     style={{backgroundImage: `url(https://admin.inyaw.com/api/file/image?type=0&random=${Math.random()})`}}>
                    <div className="absolute w-full h-full bg-black bg-opacity-30">
                        <div className="absolute bottom-16 text-center w-full">
                            <h1 className="text-white text-4xl pb-2">个人经历</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="md:flex items-stretch relative">
                    <div className="md:max-w-content mx-auto">
                        <div className="prose max-w-none p-4 dark:prose-invert">
                            <div className="entry-content">
                                <h3 className="mt-5">缘起</h3>
                                <p>出生于1990，毕业于2013年，原专业是机械专业，是个专科。大三实习期很长被学校派去流水线当工人去了，偶然听工友说起编程，经了解后产生了浓重的兴趣，之后便买了本书回家自学</p>
                                <p>学习过程主要以看书为主，视频为辅，取到毕业证之后差不多结束了学习，开始去北京找工作</p>
                                <h3 className="mt-5">工作经历</h3>
                                <p>第一份工作在一家叫做【北京中天诺士达】的公司工作，这家公司是给法院做项目的，内外网的各种网站，包括最后也自研了产品。</p>
                                <p>在当时，所用的技术多数为jsp + jdbc或者是servlet +
                                    jdbc，后来自研产品的时候，也是用上了SSH框架。在当时学到的就是，遇到压力不要怕，多去搜索，多去问，多去尝试！</p>
                                <h3 className="mt-5">跳槽</h3>
                                <p>在工作了几年之后，薪资从4k涨到了8k，我还是决定了跳槽。整个研发团队就3个人，然后老大不缺钱又是股东，直接撂挑子出去玩了。而当时公司发的还是现金，所以我还是想去稍微比较正规的公司去寻求更大的发展</p>
                                <p>天威诚信，这个公司也算业界有名。我当时去是入职了一个公司为了探索市场的组建新部门，被分配的第一个项目就是做一个为企业实名认证的项目。</p>
                                <p>这个项目其实是我接手而来，开发者就一个人，上一任开发者走了，由我接手。当时遇到了很大的困难，因为这个项目是通过别的部门的项目改编而来，而上一任开发者也没有任何开发规范，比如手写sql，所有代码都写在controller，没有任何注释等等。当时，这个项目还采用了spring
                                    security框架，在当时这个框架的可搜寻资料是非常少的，当我去询问那个部门，那个部门的3个开发者竟然无人知晓这个框架，所以，我向领导提出了，重写。</p>
                                <p>框架大致为SSM +
                                    shiro，当时shiro还是比较火的，可搜寻资料也比较多。因为有了工作经验和经常看一些开源框架，对规范有了一些了解，所以重构起来也比较轻松</p>
                                <p>之后，因为项目组市场探索没啥结果，我就被调到了别的部门，但是这个项目却意外的有些价值，所以我就一边接需求，一边开发、维护和部署</p>
                                <h3>离京</h3>
                                <p>其实这个时期，是经历了当时某些事情，北京的房价飙涨，而我的薪水也停留在了14k左右，年终奖也砍了一些。恰巧，有几个朋友离京后去了杭州，混的还不错，向我提出了邀请，所以我决定了离职</p>
                                <h3>颠沛流离的外包生活</h3>
                                <p>其实当时就突然很叛逆，我就突然想，我要去深圳，因为没去过南方，对南方大城市就很向往。但是去了之后，发现自己很失败，因为在当时p2p和金融爆火，所以很多都要求行业经验，最后找了很久找不到就只能去了一家外包到中兴的</p>
                                <p>去中兴当时是做一个进销存的项目，实际那个项目很糟糕，一个控制层方法7000行。当时要重构这个项目，需求写了3分之1，中兴的领导说不能用jsp，要前后端分离要html。html写了3分之1，又要说用vue，之后又是边学边做，当一切还算顺利的时候，整个项目组被清退了，据说搬到长沙，我就这么的再一次失去了工作。</p>
                                <p>但是在当时的敏捷开发模式，真的让我学到了大公司的氛围，比如早上短暂的站会，todo、doing、end、test小黑板会记录整个流程，做的快的人，要帮做的慢的人分担任务</p>
                                <h3>接二连三的外包</h3>
                                <p>被清退之后就去了杭州，有朋友帮助各方面都好很多，之后就入职了中国移动的项目外包。</p>
                                <p>当时是给中移动做一个运维项目，但是呢，他也是有一个旧项目的，要在此基础上改造，然后旧遇到了一个让我很难崩的住的问题。</p>
                                <p>因为不管是获取服务器信息还是日志信息，数据的来源是有一个接口的，当我询问是否有接口文档时，部门领导和我说没有。代码里又没有注释，那我又询问，我可否调用一下试试，因为命名一般都是有规律的，部门领导回答，不能。之后我又提出，可否申请几台测试服务器来试试呢，他说不行。</p>
                                <p>之后便是，没有文档、没有注释、不能测试且整个项目不能失败，因为移动那边很重要。印象深刻的是，当时要求一个页面返回4000条数据，我提出流加载和分页他都不同意，必须一次加载，可问题是4000条数据不滚动加载，数据包大小都要1-2秒，更别提前端渲染时间。</p>
                                <p>最后他找我谈话，说14K招你来是抗大旗的，啥啥干不成我要你有什么用，然后我就自己提出了离职</p>
                                <h3>一个不错的自研团队</h3>
                                <p>这次找工作意外的还挺顺利，一个做crm产品的公司接受了我，在这个公司，我遇到了相对完善的团队，产品、前端、后端、运维，也经历了很多相对完善的流程</p>
                                <p>项目规模还是挺大的，有个50几台服务器，最开始是ssm + shiro + redis + 手动加jar包。后来项目大改版，代码无法复用，我提出了项目结构变成，整个项目就变成了spring boot + maven + shiro + redis， 我还搭建了maven私服。</p>
                                <p>旧项目开发迭代了5年，废弃代码很多，我又手动整理了所有的工具类，readme里也写了一部分开发规范</p>
                            </div>
                        </div>
                        <Comment/>
                    </div>
                </div>
            </div>
        </>
    )
}
