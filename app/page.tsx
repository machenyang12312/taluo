"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

const TypewriterText = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return <span>{displayText}</span>
}

const tarotDeck = [
  {
    id: 0,
    name: 'The Fool',
    nameCn: '愚者',
    archetype: '纯真',
    element: '风',
    astrology: '天秤座',
    upright: {
      keywords: ['自由', '开始', '纯真'],
      career: '勇敢迈出新步伐，机会正在召唤',
      emotion: '保持开放的心态，迎接新的情感体验',
      wealth: '小额投资可能带来意外收获'
    },
    reversed: {
      keywords: ['鲁莽', '限制', '迷惘'],
      warning: '避免冲动决策，可能会导致不必要的风险',
      transformation: '反思内在的恐惧，寻找更稳定的方向'
    },
    narrative: '愚者代表无畏的旅程，背着行囊踏上未知之路。他象征着纯真的信仰与无限的可能性，却也提醒我们，智慧并非来自经验，而是来自对未知的拥抱。'
  },
  {
    id: 1,
    name: 'The Magician',
    nameCn: '魔术师',
    archetype: '创造力',
    element: '风',
    astrology: '水星',
    upright: {
      keywords: ['创造力', '技能', '意志力'],
      career: '运用你的才华和资源，实现目标',
      emotion: '清晰表达情感，建立真诚的连接',
      wealth: '通过智慧投资获得回报'
    },
    reversed: {
      keywords: ['操纵', '计划不周'],
      warning: '警惕被误导或操纵他人',
      transformation: '重新评估计划，确保行动基于真实意图'
    },
    narrative: '魔术师站在祭坛前，手持权杖、圣杯、宝剑和五角星。他是意志与技能的化身，能够将想法转化为现实，却也警示我们，真正的魔法来自内心的平衡。'
  },
  {
    id: 2,
    name: 'The High Priestess',
    nameCn: '女祭司',
    archetype: '直觉',
    element: '水',
    astrology: '月亮',
    upright: {
      keywords: ['直觉', '神秘', '潜意识'],
      career: '信任内在智慧，寻求更深的洞察',
      emotion: '倾听内心的声音，探索情感的深度',
      wealth: '关注长期投资，避免短期投机'
    },
    reversed: {
      keywords: ['被动', '隐瞒', '缺乏信任'],
      warning: '不要忽视直觉信号，可能导致误判',
      transformation: '培养自我信任，揭开隐藏的真相'
    },
    narrative: '女祭司坐在神秘的帷幕后，手持托拉经卷。她代表潜意识的智慧与神秘的力量，提醒我们，真相往往隐藏在表面之下。'
  },
  {
    id: 3,
    name: 'The Empress',
    nameCn: '皇后',
    archetype: '丰饶',
    element: '土',
    astrology: '金星',
    upright: {
      keywords: ['丰饶', '滋养', '创造'],
      career: '培养创造力，实现丰硕成果',
      emotion: '给予和接受爱，享受和谐关系',
      wealth: '投资于可持续项目，收获稳定增长'
    },
    reversed: {
      keywords: ['自我牺牲', '停滞', '依赖'],
      warning: '避免过度付出导致的耗竭',
      transformation: '建立健康界限，寻求内在平衡'
    },
    narrative: '皇后坐在丰饶的花园中，周围环绕着麦穗和水果。她象征着生命的滋养与创造力，提醒我们，真正的富足来自内心的丰盈。'
  },
  {
    id: 4,
    name: 'The Emperor',
    nameCn: '皇帝',
    archetype: '权威',
    element: '火',
    astrology: '白羊座',
    upright: {
      keywords: ['权威', '秩序', '稳定'],
      career: '建立结构，实现长期目标',
      emotion: '提供安全感，建立稳定关系',
      wealth: '通过纪律投资获得安全保障'
    },
    reversed: {
      keywords: ['固执', '暴政', '失控'],
      warning: '警惕权力滥用导致的冲突',
      transformation: '学习灵活性，寻求更温和的领导方式'
    },
    narrative: '皇帝坐在王座上，手持权杖和宝球。他代表秩序与权威的力量，却也警示我们，真正的领导来自智慧而非强制。'
  },
  {
    id: 5,
    name: 'The Hierophant',
    nameCn: '教皇',
    archetype: '传统',
    element: '土',
    astrology: '金牛座',
    upright: {
      keywords: ['传统', '指引', '信念'],
      career: '遵循智慧传统，实现专业成长',
      emotion: '建立精神连接，寻求指导',
      wealth: '投资于可靠机构，获得稳定收益'
    },
    reversed: {
      keywords: ['反叛', '怀疑', '束缚'],
      warning: '不要盲目遵循传统，可能限制创新',
      transformation: '质疑旧有信念，寻找个人真理'
    },
    narrative: '教皇坐在教堂中，祝福两位信徒。他象征着精神指引与传统智慧，却也提醒我们，真正的信仰来自内心的觉醒。'
  },
  {
    id: 6,
    name: 'The Lovers',
    nameCn: '恋人',
    archetype: '选择',
    element: '风',
    astrology: '双子座',
    upright: {
      keywords: ['选择', '连结', '和谐'],
      career: '做出重要决定，实现职业和谐',
      emotion: '建立真诚关系，体验爱与被爱',
      wealth: '通过合作投资获得共赢'
    },
    reversed: {
      keywords: ['分离', '冲突', '诱惑'],
      warning: '警惕关系中的冲突或诱惑',
      transformation: '审视选择，寻求更真实的连接'
    },
    narrative: '恋人站在花园中，天使在上方祝福。他们代表选择与和谐的力量，却也警示我们，真正的爱来自灵魂的共鸣。'
  },
  {
    id: 7,
    name: 'The Chariot',
    nameCn: '战车',
    archetype: '意志',
    element: '水',
    astrology: '巨蟹座',
    upright: {
      keywords: ['意志', '行动', '胜利'],
      career: '坚定前进，实现突破性进展',
      emotion: '控制情绪，实现情感平衡',
      wealth: '通过决心投资获得成功'
    },
    reversed: {
      keywords: ['失控', '阻碍', '犹豫'],
      warning: '避免冲动导致的失控局面',
      transformation: '重新获得控制，寻求更稳定的方向'
    },
    narrative: '战车骑士驾驭着狮子和狮身人面兽，象征着意志与行动的力量。他提醒我们，胜利来自内心的坚定与平衡。'
  },
  {
    id: 8,
    name: 'Strength',
    nameCn: '力量',
    archetype: '勇气',
    element: '火',
    astrology: '狮子座',
    upright: {
      keywords: ['勇气', '柔和', '耐力'],
      career: '展现内在力量，实现持久成功',
      emotion: '温柔面对挑战，建立信任',
      wealth: '通过耐心投资获得长期回报'
    },
    reversed: {
      keywords: ['弱点', '内耗', '恐惧'],
      warning: '不要让恐惧阻碍你的前进',
      transformation: '培养内在力量，克服弱点'
    },
    narrative: '力量的女性温柔地抚摸狮子的下巴，象征着勇气与柔和的力量。她提醒我们，真正的力量来自内心的平静。'
  },
  {
    id: 9,
    name: 'The Hermit',
    nameCn: '隐者',
    archetype: '内省',
    element: '土',
    astrology: '处女座',
    upright: {
      keywords: ['内省', '探寻', '智慧'],
      career: '寻求内在指引，实现智慧决策',
      emotion: '独处反思，建立自我理解',
      wealth: '谨慎投资，避免风险'
    },
    reversed: {
      keywords: ['孤独', '迷失', '逃避'],
      warning: '警惕过度孤立导致的迷失',
      transformation: '寻求指导，重新连接他人'
    },
    narrative: '隐者手持灯笼走在山路上，象征着内省与探寻的智慧。他提醒我们，有时独处才能找到真正的方向。'
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    nameCn: '命运之轮',
    archetype: '变动',
    element: '火',
    astrology: '木星',
    upright: {
      keywords: ['变动', '时机', '轮回'],
      career: '把握机遇，实现重大转变',
      emotion: '接受变化，迎接新开始',
      wealth: '投资于新兴机会，获得丰厚回报'
    },
    reversed: {
      keywords: ['停滞', '抵抗', '运势不稳'],
      warning: '不要抗拒必要的改变',
      transformation: '接受命运的轮回，寻求新的方向'
    },
    narrative: '命运之轮在云端旋转，象征着变动的力量与轮回的智慧。它提醒我们，生活是一个永恒的循环。'
  },
  {
    id: 11,
    name: 'Justice',
    nameCn: '正义',
    archetype: '平衡',
    element: '风',
    astrology: '天秤座',
    upright: {
      keywords: ['平衡', '公平', '因果'],
      career: '寻求公正，实现和谐结果',
      emotion: '建立公平关系，化解冲突',
      wealth: '通过公平交易获得稳定收益'
    },
    reversed: {
      keywords: ['偏见', '不公', '拖延'],
      warning: '警惕不公平导致的长期问题',
      transformation: '寻求平衡，纠正不公'
    },
    narrative: '正义女神手持天平和宝剑，象征着平衡与公平的力量。她提醒我们，因果循环终将带来公正。'
  },
  {
    id: 12,
    name: 'The Hanged Man',
    nameCn: '倒吊人',
    archetype: '牺牲',
    element: '水',
    astrology: '海王星',
    upright: {
      keywords: ['暂停', '牺牲', '顿悟'],
      career: '暂时停顿，实现深刻洞察',
      emotion: '放下执着，接受新视角',
      wealth: '等待时机，避免冲动投资'
    },
    reversed: {
      keywords: ['抗拒', '僵化', '错失'],
      warning: '不要固执己见，错失重要机会',
      transformation: '接受暂停，寻求顿悟'
    },
    narrative: '倒吊人倒挂在树上，象征着牺牲与顿悟的力量。他提醒我们，有时放下才能获得真正的智慧。'
  },
  {
    id: 13,
    name: 'Death',
    nameCn: '死神',
    archetype: '结束',
    element: '水',
    astrology: '天蝎座',
    upright: {
      keywords: ['结束', '蜕变', '重生'],
      career: '结束旧周期，实现重大转变',
      emotion: '放下过去，迎接新开始',
      wealth: '清理债务，准备新投资'
    },
    reversed: {
      keywords: ['抗拒变化', '停滞', '恐惧'],
      warning: '不要恐惧必要的结束',
      transformation: '接受变化，迎接重生'
    },
    narrative: '死神骑着白马，手持镰刀，象征着结束与重生的力量。它提醒我们，死亡只是新生的开始。'
  },
  {
    id: 14,
    name: 'Temperance',
    nameCn: '节制',
    archetype: '调和',
    element: '火',
    astrology: '射手座',
    upright: {
      keywords: ['调和', '节制', '整合'],
      career: '平衡各方，实现和谐发展',
      emotion: '整合不同方面，建立和谐关系',
      wealth: '平衡风险与收益，实现稳定增长'
    },
    reversed: {
      keywords: ['失衡', '冲动', '过度'],
      warning: '警惕过度行为导致的失衡',
      transformation: '寻求平衡，恢复和谐'
    },
    narrative: '节制天使在水中混合液体，象征着调和与整合的力量。她提醒我们，真正的和谐来自内心的平衡。'
  },
  {
    id: 15,
    name: 'The Devil',
    nameCn: '恶魔',
    archetype: '诱惑',
    element: '土',
    astrology: '摩羯座',
    upright: {
      keywords: ['诱惑', '束缚', '影子'],
      career: '面对限制，实现突破',
      emotion: '探索阴影面，寻求解放',
      wealth: '警惕过度欲望导致的损失'
    },
    reversed: {
      keywords: ['解脱', '觉醒', '重获自由'],
      warning: '不要忽视内在的束缚',
      transformation: '打破枷锁，实现自由'
    },
    narrative: '恶魔站在祭坛上，象征着诱惑与束缚的力量。它提醒我们，真正的自由来自对阴影的觉醒。'
  },
  {
    id: 16,
    name: 'The Tower',
    nameCn: '塔',
    archetype: '崩塌',
    element: '火',
    astrology: '火星',
    upright: {
      keywords: ['崩塌', '突破', '觉醒'],
      career: '经历剧变，实现重大突破',
      emotion: '面对真相，寻求觉醒',
      wealth: '接受损失，准备重建'
    },
    reversed: {
      keywords: ['延迟崩坏', '抗拒改变'],
      warning: '不要抗拒必要的改变',
      transformation: '接受崩塌，迎接觉醒'
    },
    narrative: '塔在雷电中崩塌，象征着突破与觉醒的力量。它提醒我们，有时毁灭才能带来新生。'
  },
  {
    id: 17,
    name: 'The Star',
    nameCn: '星星',
    archetype: '希望',
    element: '风',
    astrology: '水瓶座',
    upright: {
      keywords: ['希望', '祝福', '灵感'],
      career: '追随梦想，实现灵感',
      emotion: '保持希望，寻求治愈',
      wealth: '投资于理想，获得精神回报'
    },
    reversed: {
      keywords: ['失望', '孤立', '怀疑'],
      warning: '警惕失望导致的孤立',
      transformation: '重燃希望，寻求指引'
    },
    narrative: '星星在夜空中闪烁，象征着希望与祝福的力量。她提醒我们，灵感来自内心的光明。'
  },
  {
    id: 18,
    name: 'The Moon',
    nameCn: '月亮',
    archetype: '幻象',
    element: '水',
    astrology: '双鱼座',
    upright: {
      keywords: ['直觉', '幻象', '潜意识'],
      career: '信任直觉，实现创造性突破',
      emotion: '探索情感深度，寻求理解',
      wealth: '关注直觉投资，避免风险'
    },
    reversed: {
      keywords: ['错觉', '焦虑', '真相揭露'],
      warning: '警惕幻象导致的误判',
      transformation: '揭开真相，寻求清晰'
    },
    narrative: '月亮照耀着狗和狼，象征着幻象与潜意识的力量。它提醒我们，真相往往隐藏在阴影中。'
  },
  {
    id: 19,
    name: 'The Sun',
    nameCn: '太阳',
    archetype: '喜悦',
    element: '火',
    astrology: '太阳',
    upright: {
      keywords: ['喜悦', '能量', '成功'],
      career: '享受过程，实现成功',
      emotion: '体验喜悦，建立积极关系',
      wealth: '投资于光明前景，获得丰收'
    },
    reversed: {
      keywords: ['倦怠', '虚荣', '迟疑'],
      warning: '警惕过度乐观导致的盲目',
      transformation: '重燃热情，寻求真实成功'
    },
    narrative: '太阳在花园中升起，象征着喜悦与能量的力量。它提醒我们，真正的成功来自内心的光明。'
  },
  {
    id: 20,
    name: 'Judgement',
    nameCn: '审判',
    archetype: '觉醒',
    element: '火',
    astrology: '冥王星',
    upright: {
      keywords: ['觉醒', '审视', '转换'],
      career: '反思过去，实现重大转变',
      emotion: '寻求原谅，迎接新开始',
      wealth: '清理旧债，准备新投资'
    },
    reversed: {
      keywords: ['逃避', '迟疑', '内疚'],
      warning: '不要逃避必要的审视',
      transformation: '面对真相，实现觉醒'
    },
    narrative: '天使吹响号角，象征着觉醒与转换的力量。它提醒我们，审判来自内心的声音。'
  },
  {
    id: 21,
    name: 'The World',
    nameCn: '世界',
    archetype: '圆满',
    element: '土',
    astrology: '土星',
    upright: {
      keywords: ['圆满', '完成', '成就'],
      career: '庆祝成就，实现圆满',
      emotion: '体验完整，建立和谐',
      wealth: '收获成果，实现财务自由'
    },
    reversed: {
      keywords: ['停滞', '未完成', '分离'],
      warning: '警惕未完成导致的挫败',
      transformation: '寻求圆满，实现完成'
    },
    narrative: '世界舞者在椭圆中翱翔，象征着圆满与成就的力量。它提醒我们，旅程的终点是新的开始。'
  }
]

type TarotCard = (typeof tarotDeck)[number]

const threePositions = ['Past', 'Present', 'Future'] as const
const decisionPositions = ['Current', 'Path A', 'Path B'] as const
const innerSelfPositions = ['Surface', 'Subconscious', 'Soul'] as const

type SpreadPosition = (typeof threePositions)[number] | (typeof decisionPositions)[number] | (typeof innerSelfPositions)[number]

type SpreadType = 'classic' | 'decision' | 'inner'

type SelectedCard = {
  card: TarotCard
  position: SpreadPosition
  orientation: 'upright' | 'reversed'
}

const getCardReadingDetail = (item: SelectedCard) => {
  const core = item.orientation === 'upright' ? item.card.upright.keywords.join('、') : item.card.reversed.keywords.join('、')
  const phase = item.position === 'Past'
    ? '它呈现了你这段旅程的根源，说明过去如何影响当前状态。'
    : item.position === 'Present'
    ? '它揭示了你现在的能量场与关键挑战。'
    : item.position === 'Future'
    ? '它指向未来的趋势与你即将展开的转机。'
    : item.position === 'Current'
    ? '它反映了你当前面临的现实状况。'
    : item.position === 'Path A'
    ? '它预示了选择路径A可能带来的结果。'
    : item.position === 'Path B'
    ? '它预示了选择路径B可能带来的结果。'
    : item.position === 'Surface'
    ? '它展现了你外在表现的现状。'
    : item.position === 'Subconscious'
    ? '它揭示了潜意识层面的真实动机。'
    : item.position === 'Soul'
    ? '它带来了灵魂深处的智慧建议。'
    : '它提供更深层次的能量指引。'

  const tone = item.orientation === 'upright'
    ? '这是一个积极的信号，表示力量正在朝向成长与实现发展。'
    : '这是一个提醒，提示你当前可能被情绪或旧有模式所拖累。'

  const action = item.orientation === 'upright'
    ? '建议你拥抱当下机会，利用清晰的意志去推动下一步。'
    : '建议你先静观其变，避免仓促行动，直到内在障碍有所明朗。'

  return `【${item.position}】${item.card.nameCn}（${item.card.name}）：${core}。${phase} ${tone} ${action}`
}

const getReadingSummary = (selected: SelectedCard[], spreadMode: SpreadType) => {
  if (selected.length === 0) {
    return null
  }

  const lines = selected.map((item) => getCardReadingDetail(item))

  // Element Resonance Logic
  const elements = selected.map(card => card.card.element)
  const elementCount = elements.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const dominantElement = Object.entries(elementCount).reduce((a, b) => elementCount[a[0]] > elementCount[b[0]] ? a : b)[0]
  const resonanceText = dominantElement === '火' && elementCount[dominantElement] >= 2
    ? '牌阵中火元素的共鸣增强了你的行动力和决心，但也提醒你平衡热情与谨慎。'
    : dominantElement === '水' && elementCount[dominantElement] >= 2
    ? '水元素的流动带来了直觉与情感的深度，建议你信任内心的声音。'
    : dominantElement === '土' && elementCount[dominantElement] >= 2
    ? '土元素的稳定为你提供了坚实的基础，专注于实际行动将带来丰收。'
    : dominantElement === '风' && elementCount[dominantElement] >= 2
    ? '风元素的流动带来了变化与沟通的能量，保持开放的心态迎接新机遇。'
    : ''

  // Fate Turning Logic
  const hasDeath = selected.some(card => card.card.id === 13)
  const hasSun = selected.some(card => card.card.id === 19)
  const fateText = hasDeath && hasSun ? '死神与太阳的组合预示着深刻的蜕变与重生，痛苦之后将是光明的到来。' : ''

  let headline = ''
  if (spreadMode === 'classic' && selected.length === 3) {
    headline = `经典时空阵已完成。${resonanceText} ${fateText}过去的故事与现在的挑战正在共同铺展出未来的潜力。`
  } else if (spreadMode === 'decision' && selected.length === 3) {
    headline = `决策天平阵已完成。${resonanceText} ${fateText}当前现状与两条路径的结果为你提供了清晰的选择指引。`
  } else if (spreadMode === 'inner' && selected.length === 3) {
    headline = `灵性觉醒阵已完成。${resonanceText} ${fateText}表面现状、潜意识动机与灵魂建议为你带来了深刻的自我洞察。`
  } else {
    headline = '占卜正在进行中，继续抽取更多卡牌以获得更深入的透视。'
  }

  return {
    headline,
    lines
  }
}

export default function HomePage() {
  const [selected, setSelected] = useState<SelectedCard[]>([])
  const [spreadMode, setSpreadMode] = useState<SpreadType>('classic')
  const [shareStatus, setShareStatus] = useState('')
  const starFrameId = useRef<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const cards = useMemo(() => tarotDeck.slice(0, 22), [])
  const positions = spreadMode === 'classic' ? threePositions : spreadMode === 'decision' ? decisionPositions : innerSelfPositions
  const selectionLimit = positions.length
  const readingSummary = useMemo(() => getReadingSummary(selected, spreadMode), [selected, spreadMode])

  useEffect(() => {
    return () => {
      if (starFrameId.current) cancelAnimationFrame(starFrameId.current)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    type Star = {
      x: number
      y: number
      radius: number
      alpha: number
      speed: number
      hue: number
    }

    let stars: Star[] = []

    const initializeStars = () => {
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        radius: Math.random() * 1.4 + 0.6,
        alpha: Math.random() * 0.45 + 0.18,
        speed: Math.random() * 0.12 + 0.04,
        hue: 180 + Math.random() * 70
      }))
    }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initializeStars()
    }

    const renderStars = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(5, 5, 5, 0.35)'
      ctx.fillRect(0, 0, width, height)

      const time = performance.now() * 0.0003
      stars.forEach((star) => {
        star.x += star.speed
        if (star.x > width + 20) star.x = -20
        const glow = 0.5 + 0.5 * Math.sin((star.x + star.y) * 0.017 + time * 3)
        const alpha = star.alpha * glow
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${star.hue}, 90%, 88%, ${alpha})`
        ctx.shadowColor = `hsla(${star.hue}, 100%, 92%, ${alpha * 0.7})`
        ctx.shadowBlur = 12
        ctx.fill()
      })

      starFrameId.current = requestAnimationFrame(renderStars)
    }

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(canvas)
    resizeCanvas()
    renderStars()

    return () => {
      if (starFrameId.current) cancelAnimationFrame(starFrameId.current)
      resizeObserver.disconnect()
    }
  }, [])

  const handleSelectCard = (card: TarotCard) => {
    if (selected.some((item) => item.card.id === card.id) || selected.length >= selectionLimit) return
    const orientation = Math.random() < 0.5 ? 'upright' : 'reversed'
    setSelected((prev) => [
      ...prev,
      {
        card,
        position: positions[prev.length],
        orientation
      }
    ])
  }

  const handleShare = async () => {
    const title = spreadMode === 'classic' ? '三牌占卜结果' : '凯尔特十字占卜结果'
    const intro = `塔罗占卜结果：${title}\n\n`
    const body = selected
      .map((item) => `【${item.position}】 ${item.card.name} (${item.orientation === 'upright' ? '正位' : '逆位'}) - ${item.orientation === 'upright' ? item.card.upright : item.card.reversed}`)
      .join('\n')
    const resultText = selected.length ? intro + body : '尚未抽取任何卡牌，先点击圆环中的卡牌开始占卜吧。'

    try {
      if (navigator.share) {
        await navigator.share({ title, text: resultText })
        setShareStatus('已分享结果')
      } else {
        await navigator.clipboard.writeText(resultText)
        setShareStatus('结果内容已复制到剪贴板')
      }
    } catch (error) {
      setShareStatus('分享失败，请手动复制')
    }

    window.setTimeout(() => setShareStatus(''), 2400)
  }

  const resetSpread = () => {
    setSelected([])
  }

  return (
    <main className="min-h-screen bg-brand.midnight text-slate-100">
      <div className="relative isolate overflow-hidden px-6 py-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(50,214,255,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(174,85,255,0.12),_transparent_30%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <section className="mb-10 flex flex-col gap-6 text-center">
            <span className="text-sm uppercase tracking-[0.45em] text-cyan-300/70">神秘赛博朋克塔罗</span>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              3D 圆环塔罗 · 经典三牌占卜
            </h1>
            <p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg">
              22 张大阿尔卡那卡牌悬浮成环，通过拖拽与滚轮旋转，点击抽取过去 / 现在 / 未来的命运讯息。
            </p>
            <Link href="/entry" className="mx-auto inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/8 px-5 py-2 text-sm text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-400/15">
              备用入口：轻量欢迎页
            </Link>
          </section>

          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5 shadow-glow backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-white">抽牌说明</h2>
              <p className="mt-2 text-sm text-slate-300">
                水平拖动或滚动旋转圆环。悬停卡牌会发光，点击即可抽取一张并显示正/逆位含义。
              </p>
              <p className="mt-2 text-sm text-cyan-200/80">
                当前模式：{spreadMode === 'classic' ? '经典时空阵' : spreadMode === 'decision' ? '决策天平' : '灵性觉醒'}，最多可抽取 {selectionLimit} 张卡牌。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setSpreadMode('classic')
                  resetSpread()
                }}
                className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm transition ${
                  spreadMode === 'classic'
                    ? 'border-cyan-300 bg-cyan-400/12 text-cyan-100'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-200 hover:bg-cyan-400/10'
                }`}
              >
                经典时空阵
              </button>
              <button
                onClick={() => {
                  setSpreadMode('decision')
                  resetSpread()
                }}
                className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm transition ${
                  spreadMode === 'decision'
                    ? 'border-cyan-300 bg-cyan-400/12 text-cyan-100'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-200 hover:bg-cyan-400/10'
                }`}
              >
                决策天平
              </button>
              <button
                onClick={() => {
                  setSpreadMode('inner')
                  resetSpread()
                }}
                className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm transition ${
                  spreadMode === 'inner'
                    ? 'border-cyan-300 bg-cyan-400/12 text-cyan-100'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-200 hover:bg-cyan-400/10'
                }`}
              >
                灵性觉醒
              </button>
              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2.5 text-sm text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-400/10"
              >
                分享结果
              </button>
            </div>
          </div>
          {shareStatus ? (
            <div className="mb-6 rounded-3xl border border-cyan-300/20 bg-cyan-400/5 p-4 text-sm text-cyan-100 backdrop-blur-xl">
              {shareStatus}
            </div>
          ) : null}

          <div className="relative mx-auto mb-10 w-full max-w-[1100px] overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/60 px-4 py-6 shadow-[0_0_120px_rgba(0,0,0,0.45)]">
            <canvas ref={canvasRef} className="starfield-canvas" aria-hidden="true" />
            <div
              className="absolute inset-0 pointer-events-none rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(50,214,255,0.08),_transparent_32%)]"
              aria-hidden="true"
            />
            <div className="relative grid w-full gap-4 overflow-y-auto px-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cards.map((card) => {
                const item = selected.find((entry) => entry.card.id === card.id)
                const hoveredClass = item ? 'shadow-neon scale-[1.02]' : 'shadow-[0_22px_60px_rgba(0,0,0,0.28)]'
                const isFlipped = Boolean(item)

                return (
                  <motion.button
                    key={card.id}
                    onClick={() => handleSelectCard(card)}
                    className={`card-button relative h-[220px] w-full rounded-3xl bg-slate-950/95 transition-all duration-300 ${hoveredClass}`}
                    style={{ transform: 'perspective(1400px) translateZ(0)' }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`塔罗卡牌 ${card.name}`}
                  >
                    <motion.div
                      className="card-inner"
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.65, ease: 'easeInOut' }}
                    >
                      <div className="card-face card-back">
                        <div className="h-full rounded-[28px] border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-4 text-left text-[13px] text-slate-200 shadow-[inset_0_0_45px_rgba(50,214,255,0.12)]">
                          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-200/90">
                            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300/90" />
                            TAROT CIRCUIT
                          </div>
                          <div className="mt-10 text-2xl font-semibold text-white">Arcana</div>
                          <div className="mt-4 text-sm text-slate-400">点击抽取此卡</div>
                        </div>
                      </div>
                      <div className="card-face card-front">
                        <div className="flex h-full flex-col justify-between rounded-[28px] border border-cyan-200/15 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-5 text-white shadow-[0_0_35px_rgba(50,214,255,0.14)]">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">{item?.position || 'Arcana'}</p>
                            <h3 className="mt-4 text-xl font-semibold leading-tight">{item ? item.card.nameCn : card.nameCn}</h3>
                          </div>
                          <p className="text-[13px] leading-5 text-slate-300">{isFlipped ? item?.card.upright.keywords.join('、') : '正反位随机决定你的能量'}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {readingSummary ? (
            <div className="mb-6 rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-6 shadow-glow backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">自动解密</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                <TypewriterText text={readingSummary.headline} delay={30} />
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {readingSummary.lines.map((line, index) => (
                  <p key={line}>
                    <TypewriterText text={line} delay={20} />
                  </p>
                ))}
              </div>
            </div>
          ) : null}

          <section className="grid gap-6 lg:grid-cols-3">
            {selected.length > 0 ? (
              selected.map((item) => (
                <div key={item.card.id} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-glow backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">{item.position}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.card.name}</h3>
                  <span className="mt-3 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                    {item.orientation === 'upright' ? '正位' : '逆位'}
                  </span>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.orientation === 'upright' ? item.card.upright.keywords.join('、') : item.card.reversed.keywords.join('、')}
                  </p>
                  <div className="mt-4 rounded-2xl bg-slate-900/80 p-4 text-sm text-slate-200">
                    <p className="font-medium text-cyan-200">深入解读</p>
                    <p className="mt-2 text-slate-300">
                      {item.orientation === 'upright'
                        ? `${item.card.upright.career} ${item.card.upright.emotion} ${item.card.upright.wealth}`
                        : `${item.card.reversed.warning} ${item.card.reversed.transformation}`}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-cyan-200/70">建议行动</p>
                    <p className="mt-1 text-slate-400">
                      {item.orientation === 'upright'
                        ? '信任当下的能量，采取积极行动来推动你正在创造的方向。'
                        : '深呼吸，识别内心与环境中的限制，然后选择更有智慧的回应方式。'}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center shadow-glow backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">{spreadMode === 'classic' ? '经典时空阵' : spreadMode === 'decision' ? '决策天平' : '灵性觉醒'}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{spreadMode === 'classic' ? '点击任意三张卡牌开始你的时空占卜' : spreadMode === 'decision' ? '点击任意三张卡牌开始你的决策占卜' : '点击任意三张卡牌开始你的灵性觉醒'}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {spreadMode === 'classic'
                    ? '第一张代表过去，第二张代表现在，第三张代表未来。正逆位会自动随机分配。'
                    : spreadMode === 'decision'
                    ? '第一张代表当前现状，第二张代表路径A的结果，第三张代表路径B的结果。'
                    : '第一张代表表面现状，第二张代表潜意识动机，第三张代表灵魂建议。'}
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

// Claude API Prompt Template for Dynamic Reading
/*
You are an expert Tarot consultant with deep knowledge of mystical symbolism and human psychology. 
Your role is to provide insightful, compassionate readings that help users understand their life's patterns.

User's Question: {userQuestion}

Selected Cards:
{selectedCards}

Please provide a comprehensive reading that:
1. Analyzes the relationship between the cards
2. Considers elemental influences and astrological correspondences
3. Offers practical guidance while maintaining mystical tone
4. Uses symbolic language rather than direct predictions
5. Maintains a calm, wise, and supportive voice

Format your response as a flowing narrative, not bullet points.
*/
