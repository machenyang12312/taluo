import Link from 'next/link'

export const metadata = {
  title: '塔罗欢迎入口',
  description: '进入神秘塔罗占卜的备用入口'
}

export default function EntryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(50,214,255,0.12),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(174,85,255,0.12),_transparent_25%)]" />
        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-6 rounded-[40px] border border-white/10 bg-slate-950/70 p-10 shadow-[0_0_90px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <span className="text-sm uppercase tracking-[0.45em] text-cyan-300/70">欢迎进入塔罗仪式</span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">神秘赛博朋克塔罗</h1>
          <p className="text-center text-slate-300 sm:text-lg">
            这是一个可视化 3D 圆环塔罗占卜体验。通过鼠标拖拽旋转圆环，点击选卡并展开过去 / 现在 / 未来的解读。
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-400/20">
              进入塔罗圆阵
            </Link>
            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-200 hover:bg-cyan-400/10">
              返回主页面
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
