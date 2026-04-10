"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">仪表板</h1>
          <p className="text-xl text-gray-300 mb-8">欢迎回来！探索你的塔罗之旅</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-purple-800/50 rounded-lg border border-purple-500 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">塔罗首页</h3>
              <p className="text-gray-300 mb-4">返回主页面</p>
              <Link href="/" className="text-purple-300 hover:text-purple-200">
                前往 →
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-purple-800/50 rounded-lg border border-purple-500 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">入口页面</h3>
              <p className="text-gray-300 mb-4">访问其他页面</p>
              <Link href="/entry" className="text-purple-300 hover:text-purple-200">
                前往 →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
