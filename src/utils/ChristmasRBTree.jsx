import React from "react";
import { motion } from "framer-motion";

// 노드 데이터 구성 (간단한 RB 트리 구조)
const treeData = {
  id: "Root (Star)",
  color: "gold", // 루트는 특별히 별 색상
  isStar: true,
  children: [
    {
      id: "Node 1",
      color: "black",
      children: [
        { id: "Node 3", color: "red", children: [] },
        { id: "Node 4", color: "red", children: [] },
      ],
    },
    {
      id: "Node 2",
      color: "red",
      children: [{ id: "Node 5", color: "black", children: [] }],
    },
  ],
};

// 개별 노드 컴포넌트
const TreeNode = ({ node, delay = 0 }) => {
  const isRed = node.color === "red";

  return (
    <div className="flex flex-col items-center mt-8">
      {/* 노드 본체 */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay, duration: 0.5, type: "spring" }}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg
          ${
            node.isStar
              ? "bg-yellow-400 text-2xl"
              : isRed
              ? "bg-red-600"
              : "bg-gray-900"
          } 
          border-2 border-white text-white font-bold`}
      >
        {node.isStar ? "⭐" : ""}
      </motion.div>

      {/* 자식 노드들을 감싸는 컨테이너 */}
      {node.children && node.children.length > 0 && (
        <div className="flex gap-8 mt-10 relative">
          {/* 연결선 (간단하게 시각화) */}
          <div className="absolute top-[-40px] left-1/2 w-full h-[2px] bg-gray-300 -translate-x-1/2 -z-10" />

          {node.children.map((child, index) => (
            <TreeNode key={child.id} node={child} delay={delay + 0.4} />
          ))}
        </div>
      )}
    </div>
  );
};

// 메인 트리 컴포넌트
const ChristmasRBTree = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-20 flex flex-col items-center">
      <div className="relative">
        <TreeNode node={treeData} />
      </div>
    </div>
  );
};

export default ChristmasRBTree;
