"use client"

import React, { useState } from "react"
import { 
  Search, UploadCloud, FolderPlus, Grid, List as ListIcon, 
  MoreVertical, FileImage, FileText, FileVideo, HardDrive, 
  Download, Trash2, X, ChevronRight, Link as LinkIcon, 
  Folder, CheckSquare, Star, Clock
} from "lucide-react"

// ==========================================
// MOCK DATA 
// ==========================================
const mockFiles = [
  { id: "f1", name: "dashboard-hero-dark.png", type: "image", size: "2.4 MB", modified: "2 hours ago", dimensions: "1920x1080", uploadedBy: "John Doe", isStarred: true },
  { id: "f2", name: "Q3_Financial_Report.pdf", type: "document", size: "1.1 MB", modified: "Yesterday", pages: 12, uploadedBy: "Sarah J.", isStarred: false },
  { id: "f3", name: "product-demo-final.mp4", type: "video", size: "145 MB", modified: "Oct 12, 2025", duration: "2:45", uploadedBy: "John Doe", isStarred: true },
  { id: "f4", name: "logo-pack-transparent.zip", type: "archive", size: "12.8 MB", modified: "Oct 10, 2025", contents: "14 files", uploadedBy: "Design Team", isStarred: false },
  { id: "f5", name: "user-flow-diagram.jpg", type: "image", size: "4.8 MB", modified: "Oct 08, 2025", dimensions: "3840x2160", uploadedBy: "Alex R.", isStarred: false },
  { id: "f6", name: "api_documentation_v3.docx", type: "document", size: "1.2 MB", modified: "Oct 05, 2025", pages: 45, uploadedBy: "Dev Team", isStarred: false },
  { id: "f7", name: "marketing-assets-q4.zip", type: "archive", size: "256 MB", modified: "Oct 01, 2025", contents: "142 files", uploadedBy: "Marketing", isStarred: true },
]

export default function FileManagerPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set())
  const [previewFile, setPreviewFile] = useState<any | null>(mockFiles[0])

  const toggleSelection = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    const newSelection = new Set(selectedFiles)
    if (newSelection.has(id)) newSelection.delete(id)
    else newSelection.add(id)
    setSelectedFiles(newSelection)
  }

  const clearSelection = () => setSelectedFiles(new Set())

  const getFileIcon = (type: string, className: string = "h-10 w-10") => {
    switch(type) {
      case "image": return <FileImage className={`${className} text-indigo-500`} />
      case "document": return <FileText className={`${className} text-emerald-500`} />
      case "video": return <FileVideo className={`${className} text-rose-500`} />
      case "archive": return <HardDrive className={`${className} text-amber-500`} />
      default: return <FileText className={className} />
    }
  }

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] bg-background overflow-hidden relative text-foreground">
      
      {/* BULK ACTIONS BAR */}
      {selectedFiles.size > 0 && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-max max-w-2xl bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 shadow-2xl rounded-2xl z-50 flex items-center justify-between px-5 py-3 animate-in slide-in-from-top-4 fade-in">
          <div className="flex items-center gap-4 mr-8">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded bg-indigo-500 text-xs font-bold text-white shadow-sm">
              {selectedFiles.size}
            </span>
            <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">files selected</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg hover:bg-muted transition-colors flex items-center">
              <Folder className="h-4 w-4 mr-2" /> Move
            </button>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg hover:bg-muted transition-colors flex items-center">
              <Download className="h-4 w-4 mr-2" /> Download
            </button>
            <div className="h-4 w-px bg-border/50 mx-1"></div>
            <button className="text-sm font-medium text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 px-3 py-1.5 rounded-lg transition-colors flex items-center">
              <Trash2 className="h-4 w-4 mr-2" /> Delete
            </button>
            <button onClick={clearSelection} className="ml-2 p-1.5 text-muted-foreground hover:text-foreground rounded-lg transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="flex-none px-6 md:px-8 pt-8 pb-4 border-b border-border/50 bg-background/95 backdrop-blur z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Files</h2>
            <p className="text-sm text-muted-foreground mt-1">Manage, preview, and share your assets securely.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-lg border border-border/50 bg-card hover:bg-muted text-foreground h-10 px-4 text-sm font-medium transition-colors shadow-sm">
              <FolderPlus className="mr-2 h-4 w-4 text-muted-foreground" />
              New Folder
            </button>
            <button className="inline-flex items-center justify-center rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 h-10 px-5 text-sm font-medium transition-all shadow-md shadow-indigo-500/20">
              <UploadCloud className="mr-2 h-4 w-4" />
              Upload
            </button>
          </div>
        </div>

        {/* TOOLBAR & BREADCRUMBS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <div className="flex items-center text-sm font-medium text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
            <ChevronRight className="h-4 w-4 mx-1 opacity-50" />
            <span className="hover:text-foreground cursor-pointer transition-colors">Assets</span>
            <ChevronRight className="h-4 w-4 mx-1 opacity-50" />
            <span className="text-foreground font-semibold">Images</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 w-[200px] lg:w-[260px] rounded-full border border-input bg-card pl-9 pr-4 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <div className="flex items-center bg-card p-1 rounded-lg border border-border/50">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition-all ${viewMode === "grid" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-md transition-all ${viewMode === "list" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                <ListIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* FILES AREA */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
          
          {/* GRID VIEW */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {mockFiles.map((file) => {
                const isSelected = selectedFiles.has(file.id)
                const isPreviewed = previewFile?.id === file.id
                
                return (
                  <div 
                    key={file.id} 
                    onClick={() => setPreviewFile(file)}
                    className={`group relative flex flex-col rounded-xl border transition-all cursor-pointer overflow-hidden ${
                      isSelected ? "border-indigo-500 ring-1 ring-indigo-500/50 bg-indigo-500/5" : 
                      isPreviewed ? "border-border bg-muted/50 shadow-md" : "border-border/50 bg-card hover:border-border hover:-translate-y-1 hover:shadow-lg"
                    }`}
                  >
                    <div className={`absolute top-2 left-2 z-10 transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                      <button 
                        onClick={(e) => toggleSelection(e, file.id)}
                        className={`h-5 w-5 rounded border flex items-center justify-center transition-colors ${
                          isSelected ? "bg-indigo-500 border-indigo-500 text-white" : "bg-background/80 border-border backdrop-blur hover:border-indigo-500"
                        }`}
                      >
                        {isSelected && <CheckSquare className="h-3.5 w-3.5" />}
                      </button>
                    </div>

                    <div className="h-36 w-full bg-muted/30 border-b border-border/50 flex items-center justify-center relative overflow-hidden group-hover:bg-muted/50 transition-colors">
                      {getFileIcon(file.type, "h-12 w-12 opacity-40 group-hover:opacity-80 transition-opacity")}
                    </div>
                    
                    <div className="p-3">
                      <h4 className="text-sm font-medium text-foreground truncate" title={file.name}>{file.name}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-muted-foreground">{file.size}</p>
                        <button className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground transition-opacity p-1 rounded hover:bg-muted">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* LIST VIEW */}
          {viewMode === "list" && (
            <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/30 text-muted-foreground border-b border-border/50">
                  <tr>
                    <th className="h-10 w-12 px-4"></th>
                    <th className="h-10 px-4 font-medium">Name</th>
                    <th className="h-10 px-4 font-medium">Size</th>
                    <th className="h-10 px-4 font-medium">Type</th>
                    <th className="h-10 px-4 font-medium">Last Modified</th>
                    <th className="h-10 px-4 font-medium text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {mockFiles.map((file) => {
                    const isSelected = selectedFiles.has(file.id)
                    const isPreviewed = previewFile?.id === file.id

                    return (
                      <tr 
                        key={file.id} 
                        onClick={() => setPreviewFile(file)}
                        className={`group transition-colors cursor-pointer h-14 ${
                          isSelected ? "bg-indigo-500/10" : 
                          isPreviewed ? "bg-muted/50" : "hover:bg-muted/30"
                        }`}
                      >
                        <td className="px-4 py-3">
                          <input 
                            type="checkbox" 
                            checked={isSelected}
                            onChange={(e) => { e.stopPropagation(); toggleSelection(e as any, file.id); }}
                            className="rounded border-border/50 bg-background checked:bg-indigo-500 cursor-pointer" 
                          />
                        </td>
                        <td className="px-4 py-3 font-medium text-foreground flex items-center gap-3">
                          {getFileIcon(file.type, "h-5 w-5")}
                          <span className="truncate max-w-[200px] sm:max-w-[300px]">{file.name}</span>
                          {file.isStarred && <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{file.size}</td>
                        <td className="px-4 py-3 text-muted-foreground capitalize">{file.type}</td>
                        <td className="px-4 py-3 text-muted-foreground">{file.modified}</td>
                        <td className="px-4 py-3 text-right">
                          <button className="opacity-0 group-hover:opacity-100 p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* PREVIEW PANEL */}
        {previewFile && (
          <div className="hidden lg:flex flex-col w-[30%] min-w-[320px] max-w-[400px] border-l border-border/50 bg-card overflow-y-auto animate-in slide-in-from-right-8 duration-300">
            <div className="p-4 border-b border-border/50 flex items-center justify-between sticky top-0 bg-card/95 backdrop-blur z-10">
              <h3 className="font-semibold text-foreground flex items-center">Preview</h3>
              <button 
                onClick={() => setPreviewFile(null)}
                className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 flex justify-center border-b border-border/50 bg-muted/30">
              <div className="h-40 w-40 rounded-2xl bg-background border border-border/50 flex items-center justify-center shadow-sm relative overflow-hidden">
                {getFileIcon(previewFile.type, "h-16 w-16 opacity-60")}
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-base font-semibold text-foreground break-all">{previewFile.name}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-medium">{previewFile.type} • {previewFile.size}</p>
              </div>

              <div className="space-y-4">
                <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50 pb-2">Information</h5>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><Clock className="h-4 w-4" /> Modified</span>
                  <span className="text-foreground font-medium">{previewFile.modified}</span>
                </div>
                
                {previewFile.dimensions && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2"><FileImage className="h-4 w-4" /> Dimensions</span>
                    <span className="text-foreground font-medium">{previewFile.dimensions}</span>
                  </div>
                )}
                
                {previewFile.pages && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2"><FileText className="h-4 w-4" /> Pages</span>
                    <span className="text-foreground font-medium">{previewFile.pages}</span>
                  </div>
                )}
                
                {previewFile.uploadedBy && (
                  <div className="flex items-center justify-between text-sm pt-2">
                    <span className="text-muted-foreground">Uploaded By</span>
                    <span className="text-foreground font-medium inline-flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 flex items-center justify-center text-[10px] font-bold">
                        {previewFile.uploadedBy.charAt(0)}
                      </div>
                      {previewFile.uploadedBy}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-6 space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-indigo-500 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors shadow-sm">
                  <Download className="h-4 w-4" /> Download File
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-background border border-border/50 text-foreground py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                  <LinkIcon className="h-4 w-4 text-muted-foreground" /> Copy Public Link
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-transparent text-rose-500 py-2.5 rounded-lg text-sm font-medium hover:bg-rose-500/10 transition-colors">
                  <Trash2 className="h-4 w-4" /> Delete Asset
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}